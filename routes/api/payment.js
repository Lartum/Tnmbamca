const Razorpay = require('razorpay');
const express = require('express');
const router = express.Router();
const passport = require('passport');
const request = require('request')

const razor_key_id = require('../../config/keys').RAZORPAY_KEY_ID;
const razor_secret = require('../../config/keys').RAZORPAY_SECRET;

//Load Order Model
const Payment = require('../../models/Payment');
//Load User Model
const User = require('../../models/User');

//Razor Pay initialization
var instance = new Razorpay({
    key_id: razor_key_id,
    key_secret: razor_secret,
    // headers: {
    //   "X-Razorpay-Account": "EGViQKDXXYjn3n"
    // }
  })

router.post('/', passport.authenticate('jwt', 
{ session: false }),(req,res)=>{

  host = req.headers.host;
  successlink = 'http://' + host + '/payment-callback';
  failurelink = 'http://' + host + '/payment-cancel'
  var options = {
    amount: 30000,  // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11",
    payment_capture: '0',
  }
  
  instance.orders.create(options, function(err, order) {
    res.json({
      callbacklink: successlink,
      failureLink: failurelink,
      order
    });
  });
})

router.post('/payment-callback', async  (req,res) =>{
  try{ 
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body;
  request(`https://${razor_key_id}:${razor_secret}@api.razorpay.com/v1/payments/${razorpay_payment_id}`, 
  (error, response, body) => {
   var data = JSON.parse(body);
   const email = data.email
   User.findOne({email})
      .then(user =>{
        console.log(user);
        user.paid = true;
        user.save()
        const paymentDetails = new Payment({
              userid : req.user._id,
              applicationno : req.user.applicationno,
              name: req.user.name,
              email: req.user.email,
              razorpay_order_id,
              razorpay_payment_id,
              razorpay_signature,
              })

      paymentDetails.save()    
      }).catch(err =>{
        console.log(err);
      })
    });
     res.json({msg:'Payment Successfull'});

 
  }
  catch(err){
    console.log(err);
  }
})


module.exports = router;