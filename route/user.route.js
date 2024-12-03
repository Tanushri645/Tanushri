const express=require("express");
const router =express.Router();
const User=require("../model/user.model");


router.post("/register",async(req,res) => {
    try{
        const newuser = new User({
         userName: req.body.username,
         email: req.body.email,
         password: req.body.password,
        });
        if(await User.findOne({ email:req.body.email})) {
            return res.status(602).send("same email already exists");
        }
        const user = await newuser.save();
        console.log(user);
        res.status(201).json(user);
    } catch(err) {
        res.status(400).send("error:" + err);
    }
    res.end();
});
router.get("/login", async (req, res) => {
    try {
        const user = await User.findOne ({
                
            email: req.body.email,
            password: req.body.password,
    
        });
        res.status(200).json(user);
        } catch(err) {
        res.status(400).send("Error:" +err);
    }
     res.end();
});
    
module.exports = router;
