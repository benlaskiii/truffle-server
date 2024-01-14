const { response } = require("express");
const user_info = require("../models/user");

const login_page = (req,res)=>{
    res.render("login");
}

const login = (req, res) => {
    user_info.findOne({ username: req.body.username }).then(response=>{
       if(req.body.password === response.password){
          res.code = 5; 
          res.msg = "successful login";
          res.send({"code":res.code,"msg":res.msg});
       }
       else {
        res.code = 3; 
        res.msg = "wrong password";
        res.send({"code":res.code,"msg":res.msg});
        }
    }).catch(error=>{
      res.code = 1;//code 1 for account does not exist 
      res.msg = "this username hasn't been registered plz register first";
      res.send({"code":res.code,"msg":res.msg});
    })
};

const register_page = (req,res)=>{
    res.render("register");
}

const register = (req, res) => {
  const r_username = req.body.username;
  const r_password = req.body.password;

  user_info.findOne({ username: r_username}).then(response=>{
    if(response == null){//username is not registered 
        console.log("creating an account");
        user_info.create({
          username: r_username,
          password: r_password
        })
        .then(() => {
          //send res
          res.code = 0;//code 0 for successfully creating account 
          res.msg = "account created";
          res.send({"code":res.code,"msg":res.msg});
        })
        .catch((error) => {
          console.error(error);
          res.status(500).send('Internal Server Error');
        });
    }else{//username already existed in the dataBASE 
      console.log("username has already been registered");
      //send res
      res.code = 2;//code 2 for already existed username  
      res.msg = "username has already been register";
      res.send({"code":res.code,"msg":res.msg});
    }
  });

  
};

module.exports = {login_page,login,register,register_page};