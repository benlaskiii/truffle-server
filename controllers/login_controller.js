const { response } = require("express");
const user_info = require("../models/user");

const login_page = (req,res)=>{
    res.render("login");
}

const login = (req, res) => {
    user_info.findOne({ username: req.body.username }).then(response=>{
       if(req.body.password === response.password){
            res.send("login page");
       }
       else {
            res.status(400).json({ error: "password doesn't match"});
        }
    }).catch(error=>{
        res.send("user doesn't exist please register");
    })
};

const register_page = (req,res)=>{
    res.render("register");
}

const register = (req, res) => {
    user_info.create({
      username: req.body.username,
      password: req.body.password
    })
      .then(() => {
        res.send('User registered successfully');
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Internal Server Error');
      });
};

module.exports = {login_page,login,register,register_page};