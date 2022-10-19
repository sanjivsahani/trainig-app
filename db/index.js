const mongoose = require('mongoose')
const MongoDbURI = "mongodb://localhost:27017"


 const ConnectToMongoDb = () =>{
    mongoose.connect(MongoDbURI,()=>{
        console.log("mongoDb is connected")
    })
}

module.exports = ConnectToMongoDb;
 