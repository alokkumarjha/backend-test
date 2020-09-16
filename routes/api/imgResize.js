const Jimp = require("jimp")

/**
 * input => This api takes imgUrl as query parameter
 * output => It will give base64 of resized image as an output
 * Note :- this base64 can easily be converted into new URL when we upload it on S3
 */

exports.getResizedImage = async(req,res) => {
    try {
        Jimp.read(req.query.imgUrl, function(err,img){
            if (err) throw err;
            img.resize(50, 50).getBase64( Jimp.AUTO , function(e,img64){
                if(e)throw e
                return res.status(200).send({img:img64})
            });
        });
    } catch (error) {
        console.log(error)
        return res.status(500).send('Internal Server Error')
    }
}