var mongoose = require("mongoose");

var CommentsSchema =  new mongoose.Schema({
   
   title:String,
   author: {
       
       id:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"User"
       },
      username: String   
   }
   
    
});

module.exports = mongoose.model("Comment",CommentsSchema);