const express = require('express')
const router = express.Router()
const User = require('../models/User')

// Below we are creating a new User based on the input give us by the client and the endpoint hit at the end is "localhost:5000/api/createuser" and as a response we get "success" as false

router.post("/createuser", async (req, res) => {
    try{
        await User.create({
                name: "Shyam Das",
                password: "123456",
                email: "emal@gmail.com",
                location: "qwerty"
            })
    res.json({success: true});
    }catch (error){
        console.log(error)
        res.json({success: false});
    }
})

module.exports = router;