var mongoose = require("mongoose")

//creating a schema.
//schema is basics a format with which all the data are stored in the databases.Mongodb is a NoSql db which has fexlibility but having schema would
//good inpact in our web apps performance.
var campgroundSchema = new mongoose.Schema({
   name:String,
   image:String,
   description:String,
   author:{
      id:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"User"
      },
      username:String
   },
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref:"Comment"
      
      }
   ]
   
});

//creating a model for campgroundSchema. A Model is just a Powerful method which wraps up our schema with Moo=ngodb methods such as create(),find()
//remove() etc.
module.exports = mongoose.model("Campground", campgroundSchema); 
