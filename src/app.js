const express=require('express');
const path= require("path");
require("./db/connection");
const User= require("./models/user")
const hbs = require("hbs");
const app = express();
const port= process.env.PORT || 3000;

//setting the path
const staticpath=path.join(__dirname,"../public");
const templates=path.join(__dirname,"../templates/views");
const partials=path.join(__dirname,"../templates/partials");

app.use('/css', express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")))
app.use('/js', express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")))
app.use('/jq', express.static(path.join(__dirname,"../node_modules/jquery/dist")))

app.use(express.urlencoded({extended:false}));
app.use(express.static(staticpath));
app.set("views",templates);
hbs.registerPartials(partials);


//set view engine
app.set("view engine", "hbs");

//routing
app.get("/",(req,res)=>{
    res.render("index");
})

app.post("/contact",async(req, res)=>{
    try{
       // res.send(req.body);
       const userData=new User(req.body)
       await userData.save();
       res.status(201).render("index");
    }catch(error){
        res.status(500).send(error);
    }
});
//server create
app.listen(port,()=>{
    console.log(`server is running port no ${port}`);
})