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
          res.send({"code":res.code,"msg":res.msg,"level":response.level,"accquiredXP":response.accquiredXP});
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
          password: r_password,
          level:1,
          accquiredXP:0
        })
        .then((response) => {
          //send res
          res.code = 0;//code 0 for successfully creating account 
          res.msg = "account created";
          res.send({"code":res.code,"msg":res.msg,"level":response.level,"accquiredXP":response.accquiredXP});
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

const update_page = (req,res)=>{
  res.render("update_user");
}

const update_user = (req, res) => {
  const r_xp = req.body.accquiredXP;
  const r_level = req.body.level;
  user_info.findOne({ username: req.body.username }).then(response=>{
    if(req.body.password === response.password){
      response.accquiredXP = r_xp;
      response.level = r_level;
      response.save();
    }
 }). then(() => {
    res.send({ success: true, message: 'User data updated successfully' });
  })
  .catch(error => {
    res.send({ success: false, message: error.message });
  });
};

module.exports = {login_page,login,register,register_page,update_page,update_user};