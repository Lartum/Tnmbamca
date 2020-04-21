const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

aws.config.update({
  accessKeyId: 'AKIAJE4C7O74WGLDRU5A',
  secretAccessKey: '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',
  region: 'ap-southeast-1', 
});

const s3 = new aws.S3();

if (!aws.config.region) {
  aws.config.update({
    region: 'ap-southeast-1'
  });
}



const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type, only JPEG,JPG and PNG is allowed!'), false);
  }
}

const upload = multer({
  fileFilter,
  storage: multerS3({
    acl: 'public-read',
    s3,
    bucket: 'uploadedfiles21',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: 'TESTING_METADATA'});
    },
    key: function (req, file, cb) {
      cb(null, crypto.randomBytes(64).toString('hex')+Date.now().toString()+'.jpeg')
    }
  })
});

module.exports = upload;