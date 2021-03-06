const express = require('express');
const router = express.Router();
const passport = require('passport');

// Load Validation
const Application = require('../../models/Application');

// Load User Model
const User = require('../../models/User');


// Load User Model
const File = require('../../models/Files');


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
               File.findOne({userid: application._userid})  
                  .then(file=>{
                    application.image = req.file.image,
                    application.plustwoMarksheet = req.file.plustwoMarksheet,
                    application.allsemMarksheet = req.file.allsemMarksheet,
                    application.degreeCertificate = req.file.degreeCertificate,
                    application.transferCertificate = req.file.permamentcommunitycard,
                    application.tancethallticket = req.file.tancethallticket,
                    application.tancetmarksheet = req.file.tancetmarksheet,
                    application.nativitycertificate = req.file.nativitycertificate,
                    application.districtmedicalboard = req.file.districtmedicalboard,
                    application.srilankantamilrefugee = req.file.srilankantamilrefugee,
                    application.demanddraft = req.file.demanddraft
                  })
               application.save();   
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
     })
    }
  catch (err){
    console.log(err);
  }  
});


module.exports = router;
