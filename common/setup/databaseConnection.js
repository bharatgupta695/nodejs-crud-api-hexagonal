'use strict'
const mongoose = require('mongoose')

const DatabaseConnection = {
  create: async (config) => {
    
    return mongoose.connect(
      config.DB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    ).then((data) => {
        console.log(`Mongodb connected with server : ${data.connection.host}`);
    }).catch((error) =>{
    console.log(error)
   })
  }
}
module.exports = DatabaseConnection