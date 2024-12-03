const mongoose =require('mongoose');

const userSchema=mongoose.Schema({
    text:{
        type: string,
        required: true,
    },
    status:{
        type:String,
        default :"Not Done",
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
});
module.exports=mongoose.model("Todo", Todoschema);







