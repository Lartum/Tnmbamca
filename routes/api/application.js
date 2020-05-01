const express = require('express');
const router = express.Router();
const passport = require('passport');
const cors = require('cors');

// Load Validation
const Application = require('../../models/Application');
const profileImgUpload = require('../../services/imageupload');
// Load User Model
const User = require('../../models/User');

//Load Img Model
const Image = require('../../models/Image');


router.post( '/imageupload', passport.authenticate('jwt', 
{ session: false }), async (req, res) => {
	profileImgUpload( req, res, ( error ) => {
		console.log( 'requestOkokok', req.file );
		console.log( 'error', error );
		if( error ){
			console.log( 'errors', error );
			res.json( { error: error } );
		} else {
			// If File not found
			if( req.file === undefined ){
				console.log( 'Error: No File Selected!' );
				res.json( 'Error: No File Selected' );
			} else {
        
        // If Success
				const imageName = req.file.key;
				const imageLocation = req.file.location;
        
        // Save the file name into database into profile model
        const image = new Image({
          userid: req.user._id,
          applicationno: req.user.applicationno,
          imageName: imageName,
          imageData: imageLocation
        })

        image.save();
        
				res.json( {
					image: imageName,
					location: imageLocation
				} );
			}
		}
	});
});

router.options('/userimage',passport.authenticate('jwt', { session: false }), cors())
router.get('/userimage', passport.authenticate('jwt', { session: false }), cors(),
  async (req, res) => {
    Image.findOne({ userid: req.user._id})
      .then(picture=>{

        res.json({picture});
      })
})

router.post('/', passport.authenticate('jwt', 
{ session: false }), async (req, res) => {
    try {

      
       let  calculatePreFinalTotal, calculatePreFinalObtained, calculatePreFinalPer;

       switch(req.body.patternOfStudy){
         
        case "10 + Plus Two + 3 Years Degree":
             calculatePreFinalTotal = req.body.overalltotalmarks - req.body.VIsemmaxmarks;
             calculatePreFinalObtained = req.body.overallmarksobtained - req.body.VIsemmarks;
             calculatePreFinalPer = parseFloat(((req.body.overallmarksobtained - req.body.VIsemmarks) * 100)/
             parseFloat(req.body.overalltotalmarks - req.body.VIsemmaxmarks)).toFixed(2); 
             break;

        case "10 + 3 Years Diploma + 3 Years Degree":
          calculatePreFinalTotal = req.body.overalltotalmarks - req.body.VIsemmaxmarks;
          calculatePreFinalObtained = req.body.overallmarksobtained - req.body.VIsemmarks;
          calculatePreFinalPer = parseFloat(((req.body.overallmarksobtained - req.body.VIsemmarks) * 100)/
          parseFloat(re.body.overalltotalmarks - req.body.VIsemmaxmarks)).toFixed(2); 
          break;

       case "10 + Plus Two + 4 Years Degree":
        calculatePreFinalTotal = req.body.overalltotalmarks - req.body.VIIIsemmaxmarks;
        calculatePreFinalObtained = req.body.overallmarksobtained - req.body.VIIIsemmarks;
        calculatePreFinalPer = parseFloat(((req.body.overallmarksobtained - req.body.VIIIsemmarks) * 100)/
        (req.body.overalltotalmarks - req.body.VIIIsemmaxmarks)).toFixed(2); 
        break;

       }

       console.log("the calculated totals are :"+calculatePreFinalTotal, calculatePreFinalObtained, calculatePreFinalPer);
      //  if(req.body.patternOfStudy === "10 + Plus Two + 3 Years Degree" || "10 + 3 Years Diploma + 3 Years Degree"){
      //    calculatePreFinalTotal = req.body.overalltotalmarks - req.body.VIsemmaxmarks;
      //  }
      //  else if()

      //  const calculatePreFinalTotal = (choice) =>{
       
      //   if(choice === "10 + Plus Two + 3 Years Degree" || "10 + 3 Years Diploma + 3 Years Degree"){
      //     return req.body.overalltotalmarks - req.body.VIsemmaxmarks
      //   }
      //   else{
      //     return req.body.overalltotalmarks - req.body.VIII;
      //   }
       
      // }

      // const calculatePreFinalObtained = (choice) => {
      //   if(choice === "10 + Plus Two + 3 Years Degree" || "10 + 3 Years Diploma + 3 Years Degree"){
      //     return req.body.overallmarksobtained - req.body.VIsemmarks
      //   }
      //   else {
      //     return req.body.overallmarksobtained - req.body.VIIIsemmarks;
      //   }
      // }

      // const calculatePreFinalPer = (choice) => {
      //   if(choice === "10 + Plus Two + 3 Years Degree" || "10 + 3 Years Diploma + 3 Years Degree"){
      //    return parseFloat(
      //       ((req.body.overallmarksobtained - req.body.VIsemmarks) * 100)/
      //       parseFloat(re.body.overalltotalmarks - req.body.VIsemmaxmarks)).toFixed(2);
      //   }
      //   else {
      //     return parseFloat(
      //       ((req.body.overallmarksobtained - req.body.VIIsemmarks) * 100)/
      //       (req.body.overalltotalmarks - req.body.VIIsemmaxmarks)).toFixed(2);
      //   }
      // }
    
      console.log(calculatePreFinalObtained,calculatePreFinalTotal,calculatePreFinalPer);

      const newApplication = new Application({
       
        _userid: req.user._id,
        
        applicationno: req.user.applicationno,
        regno: req.user.regno,  
        choice:req.user.choice,
        email: req.user.email,
        name: req.user.name,
        phonenumber: req.user.phonenumber,
        tancentMarks: req.user.tancentmarks,
        

        nameOfParent: req.body.nameOfParent,
       
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth,
        nativity:req.body.nativity,

        differentlyAbled: req.body.differentlyAbled,
        citizenship: req.body.citizenship,
        placeOfBirth: req.body.placeOfBirth,
        religion: req.body.religion,
        motherTongue: req.body.motherTongue,

        address:  req.body.address,
        state: req.body.State,
        district: req.body.district,
        pincode: req.body.pincode,

        mobileno: req.body.mobileno,
        telephoneno: req.body.telephoneno,

        nameOfCommunity: req.body.nameOfCommunity,
        nameOfCaste: req.body.nameOfCaste,
        casteCode: req.body.casteCode,
        sriLankanRefugee: req.body.sriLankanRefugee,

        qualifyingDegree: req.body.qualifyingDegree,
        patternOfStudy: req.body.patternOfStudy,
        appearanceInTheFinal: req.body.appearanceInTheFinal,
       
        mathsStudied: req.body.mathsStudied,
        
        XyearOfPassing: req.body.XyearOfPassing,
        XnameOfSchool: req.body.XnameOfSchool,
        Xstate: req.body.Xstate,
        Xdistrict: req.body.Xdistrict,

        XIIyearOfPassing: req.body.XIIyearOfPassing,
        XIInameOfSchool: req.body.XIInameOfSchool,
        XIIstate: req.body.XIIstate,
        XIIdistrict: req.body.XIIdistrict,

        degreeYearOfPassing: req.body.degreeYearOfPassing,
        degreeNameOfSchool: req.body.degreeNameOfSchool,
        degreeState: req.body.degreeState,
        degreeDistrict: req.body.degreeDistrict,

        ugDegree: req.body.ugDegree,
        collegeName: req.body.collegeName,
        collegeAddress: req.body.collegeAddress,
        universityAddress: req.body.universityAddress,
        universityName: req.body.universityName,

        IsemMonth: req.body.IsemMonth,
        Isemyop: req.body.Isemyop,
        Isemmaxmarks: req.body.Isemmaxmarks,
        Isemmarks: req.body.Isemmarks,

        IIsemMonth: req.body.IIsemMonth,
        IIsemyop: req.body.IIsemyop,
        IIsemmaxmarks: req.body.IIsemmaxmarks,
        IIsemmarks: req.body.IIsemmarks,
        
        IIIsemMonth: req.body.IIIsemMonth,
        IIIsemyop: req.body.IIIsemyop,
        IIIsemmaxmarks: req.body.IIIsemmaxmarks,
        IIIsemmarks: req.body.IIIsemmarks,
        
        IVsemMonth: req.body.IVsemMonth,
        IVsemyop: req.body.IVsemyop,
        IVsemmaxmarks: req.body.IVsemmaxmarks,
        IVsemmarks: req.body.IVsemmarks,
        
        VsemMonth: req.body.VsemMonth,
        Vsemyop: req.body.Vsemyop,
        Vsemmaxmarks: req.body.Vsemmaxmarks,
        Vsemmarks: req.body.Vsemmarks,
        
        VIsemMonth: req.body.VIsemMonth,
        VIsemyop: req.body.VIsemyop,
        VIsemmaxmarks: req.body.VIsemmaxmarks,
        VIsemmarks: req.body.VIsemmarks,
        
        VIIsemMonth: req.body.VIIIsemMonth,
        VIIsemyop: req.body.VIIsemyop,
        VIIsemmaxmarks: req.body.VIIsemmaxmarks,
        VIIsemmarks: req.body.VIIsemmaxmarks,
        
        VIIIsemMonth: req.body.VIIsemMonth,
        VIIIsemyop: req.body.VIIIsemyop,
        VIIIsemmaxmarks: req.body.VIIIsemmaxmarks,
        VIIIsemmarks: req.body.VIIIsemmarks,
        
        IXsemMonth: req.body.IXsemMonth,
        IXsemyop: req.body.IXsemyop,
        IXsemmarks: req.body.IXsemmarks,
        IXsemmaxmarks: req.body.IXsemmaxmarks,
        
        XsemMonth: req.body.XsemMonth,
        Xsemyop: req.body.Xsemyop,
        Xsemmarks: req.body.Xsemmarks,
        Xsemmaxmarks: req.body.Xsemmarks,
                
        overalltotalmarks: req.body.overalltotalmarks,
        overallmarksobtained: req.body.overallmarksobtained,
        totalpermark: req.body.totalpermark,
        
        prefinalsemoveralltotalmarks: calculatePreFinalTotal,
        prefinalsemoverallmarksobtained: calculatePreFinalObtained,
        prefinalsemtotalpermark: calculatePreFinalPer,

      });

      newApplication.save()
            .then(application =>{
              User.findOne({_id: application._userid})
                 .then(user=>{
                    console.log(user)
                     user.applicationcomplete = true;
                     user.save();
                 })   
              res.json(application)
              }
             )
            .catch(err => console.log(err));
     
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);


// @route   Edit api/application
// @desc    Edit Application Basic Details
// @access  Private
router.post('/basicedit', passport.authenticate('jwt', 
{ session: false }), async (req,res)=>{

  const {
    nameOfParent,
    gender,
    dateOfBirth,
    citizenship,
    nativity,
    placeOfBirth,
    religion,
    motherTongue
  }= req.body;

  try{   
  Application.findOne({_userid: req.user._id})
     .then(application =>{
       application.nameOfParent = nameOfParent;
       application.gender = gender;
       application.dateOfBirth = dateOfBirth;
       application.citizenship = citizenship;
       application.nativity = nativity;
       application.placeOfBirth = placeOfBirth;
       application.religion = religion;
       application.motherTongue = motherTongue;

    

      application.save();

      return res.redirect("https://mbamcatn.herokuapp.com/viewapplication")
      const successredirect = {
        redirect: '/edit'
      }
      res.json(successredirect);
     })
    }
  catch (err){
    console.log(err);
  }  
});



// @route   DELETE api/profile
// @desc    Delete user and profile
// @access  Private
// router.delete(
//   '/',
//   passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     Profile.findOneAndRemove({ user: req.user.id }).then(() => {
//       User.findOneAndRemove({ _id: req.user.id }).then(() =>
//         res.json({ success: true })
//       );
//     });
//   }
// );

module.exports = router;
