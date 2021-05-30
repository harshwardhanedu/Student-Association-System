const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/register1",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("Connection Successfull ff");
}).catch((e)=>{
    console.log('No connection');
})