const express = require("express");
const router = express.Router();
const List = require("../model/user.model");
const User = require("../model/user.model");

router.post("/add", async(req,res) =>
{
    try{
        const newlist=new List({
            text: req.body.title,
            user: req.body.user,
        });
        const list= await newlist.save();
        console.log(list);
        res.status(201).json(list);
    } catch (err) {
        res.status(400).send("Error:" +err);
    }
    res.end();
})
router.get("/all",async(req,res)=>{
    try{
        const list=await List.find({
           
            user:req.body.user,
        }); 
        console.log(list);
        res.status(200).json(list);
    }catch(err){
        res.status(400).send("Error: "+ err);
    }
    res.end();
});
router.delete("/:id", async (req,res) => {
    try{
        const updatedList = await List.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedList);
    } catch(error){
        res.status(400).send("Error:"+ error);
        
    }
    
});
module.exports = router;