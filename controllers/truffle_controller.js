const { response } = require("express");
const mushroom_info = require("../models/truffle");

//get all mushroom 
const get_all_mushroom = (req,res,next)=>{
    mushroom_info.find().then(response=>{
        res.json({response})
    }).catch(error=>{
        console.log(error)
    })
}
//update if a truffle is picked or not 


//update the life cycle by given truffle id

//return a list of nearby truffles given location of the user
const get_nearby_mushroom = (req,res)=>{
    var req_latitude = Number(req.params.latitude);
    var req_longitude = Number(req.params.longitude);
    // console.log(typeof(latitude));
    mushroom_info.find({latitude:{$lte:req_latitude},longitude:{$lte:req_longitude}}).then(response=>{
        res.json({response})
    }).catch(error=>{
        console.log(error)
    })
   
}

module.exports = {get_all_mushroom,get_nearby_mushroom};