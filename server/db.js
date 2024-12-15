const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/HEZrooms?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.2';


const connectDb = () => {
  mongoose.connect(url)
    .then(() => console.log('mongodb connected successfully. . .'))
    .catch((err) => console.log("error in database connection", err))
}

module.exports = connectDb;


