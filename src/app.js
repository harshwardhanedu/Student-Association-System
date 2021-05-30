const express = require("express");
const path = require("path")
const app = express();
const hbs = require("hbs");

require("./db/conn");


const Register = require("./models/register");


const port = process.env.PORT || 3000;

const static_path= path.join(__dirname, "../public");

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(express.static(static_path));
app.set("view engine","hbs");

app.get("/",(req,res) =>{
    res.render("index")
})

app.get("/generic",(req,res)=>{
    res.render("generic")
})

app.get("/register",(req,res)=>{
    res.render("register")
})

app.post("/register", async(req,res)=>{
    try{
        const registerperson=new Register({
            name: req.body.name,
            contact: req.body.contact,
            email: req.body.email,
            gender: req.body.gender,
            dept: req.body.dept,
            year: req.body.year,
            fest: req.body.fest,
            fest1: req.body.fest1,
            fest2: req.body.fest2
        })

        const registered = await registerperson.save();
        res.status(201).render("generic");

    }catch(error){
        res.status(400).send(error);
    }
})

app.get("/csetechno",(req,res)=>{
    res.render("csetechno")
})

app.get("/elements",(req,res)=>{
    res.render("elements")
})

app.listen(port,() =>{
    console.log("Server at",port);
})

