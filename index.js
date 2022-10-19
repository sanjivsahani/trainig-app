//  all the import will be in the starting 
const  express = require("express") 
// const ConnectToMongoDb = require('./db/index')
const ConnectToMongoDb = require('./db')

// app config 
const app = express()
// call the function to connect the mongo Db 
ConnectToMongoDb()

// port 
const port = 8000;
// router 
 // auth router 
app.use('/api/v1/auth' ,require('./router/Auth'))

// llistner 
app.listen(port,()=>{
    console.log("app is listing at the port "+port)
})

