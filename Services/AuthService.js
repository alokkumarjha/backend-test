const keystone = require("keystone");
const jwt = require('jsonwebtoken');

exports.getToken = async (obj, key) => {
    return new Promise((resolve,reject)=>{
        jwt.sign({obj}, key, { expiresIn: '24h' },async (err, token) => {
            if(err) { 
                console.log(err)
                reject(err)
            }else{ 
                console.log('token',token)
                resolve(token);
            }
        });
    })
}