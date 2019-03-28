const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const List = require('./controllers/ListController');

app.use(bodyParser.json());

// db config
const db = require('./config/keys').mongoURI;
// connect to mongodb
mongoose
  .connect(db)
  .then(() => console.log('Mongodb connected...'))
  .catch(err => console.log(err, 'error with mongodb'));


app.use('/api/list', List);

app.listen(process.env.PORT || 9000, ()=> {
  console.log(`Server started on port 9000`)
});
