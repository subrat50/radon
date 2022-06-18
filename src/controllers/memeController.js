let axios = require("axios")

let memePage = async function (req, res) {
    try {
        let options = {
            methoed: 'get',
            url: "https://api.imgflip.com/get_memes"
        }
        let result = await axios(options)
        console.log(result)
        let data = result.data
        res.send({ data: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.messege })
    }
}


let editMeme = async function (req, res) {
    try {
        let template_id=req.query.template_id
        let  text0=req.query.text0
        let text1=req.query.text1
        let username =req.query.username
        let password = req.query.password
        let option = {
            methoed: 'post',
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }
        let result = await axios(option)
        console.log(result)
        let data = result.data
        res.send({ data: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.messege })
    }
}
    module.exports.editMeme=editMeme
    module.exports.memePage=memePage