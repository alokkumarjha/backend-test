const keystone = require("keystone");
const User = keystone.list("User").model;
const {getToken} = require('../../Services/AuthService')

/**
 * Body params = > name, email, password.
 * Output => this api validates the data if validation failed,error is thrown else data awill be saved 
 * in collection and token will be generated ,which is valid for 24 hours
 */

exports.loginUser = async (req,res) => {
    try {
        let check = await User.find({email:req.body.email});
        if(check && check.length>0){
            return res.status(200).send({response:"User already logged in"});
        }
        let regForEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
        if(!regForEmail.test(String(req.body.email).toLowerCase())){
            return res.status(409).send({error:"Invalid Email"});
        }
        if(req.body.password.length<6){
            return res.status(409).send({error:"password too short"});
        }
        let obj = {
            email : req.body.email,
            password : req.body.password
        }
        await new User({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            isAdmin : true
        }).save();
        let key = process.env.SECRET_KEY;
        let token = await getToken(obj,key);
        return res.status(200).send({response:"Login Successful", token:token});
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal Server Error');
    }
}