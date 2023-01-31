const mongoose = require("mongoose");
const TodoSchema=new mongoose.Schema({
    title:{
        type:String,
           required:true
    },
    status:{
        type:Boolean,

    }
},
{versionKey:false,
timestamps:true})

const Todos=mongoose.model("TodoDatas",TodoSchema);
module.exports=Todos;