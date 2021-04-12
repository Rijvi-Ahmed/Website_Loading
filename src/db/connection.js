const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/dynamicwebsite",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection sucessful");
}).catch((error)=>{
    console.log(error);
})