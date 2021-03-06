const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const methodOverride = require('method-override');


const users = require('./routes/api/users');
const application = require('./routes/api/application')
const pdfgenerate = require('./routes/api/pdfgenerate');
const payment = require('./routes/api/payment');
const fileupload = require('./routes/api/fileupload');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(methodOverride('_method'));

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true }) 
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);


// Use Routes
app.use('/api/users', users);
app.use('/api/application', application);
app.use('/api/pdfgenerate', pdfgenerate);
app.use('/api/payment', payment);
app.use('/api/fileupload', fileupload);

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


// cors_proxy.createServer({
//     originWhitelist: [], // Allow all origins
//     requireHeader: ['origin', 'x-requested-with'],
//     removeHeaders: ['cookie', 'cookie2']
// }).listen(port, host, function() {
//     console.log('Running CORS Anywhere on ' + host + ':' + port);
// });

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
