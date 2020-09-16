const jwt = require('jsonwebtoken');

exports.checkToken = (req, res, next) => {
    const header = req.headers['authorization'];
    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];

        req.token = token;
        next();
    } else {
        return res.status(403).send({response:"Header is undefined"});
    }
}

exports.verifyToken = async (req,res,next) => {
    let key = process.env.SECRET_KEY
    jwt.verify(req.token, key , (err, verifiedJwt) => {
        if(err){
            res.send(err.message);
        }else{
            next();
        }
    })
}