var express = require("express");
var router  = express.Router();
var Campground = require("../models/campgrounds");
var middleware = require("../middleware");




//INDEX route
router.get("/",function(req,res){
    
    //retrive all the campgrounds from db
        Campground.find({}, function(err,campgrounds){
           if(err){
               console.log("Error while Retriving");
               console.log(err);
           } else{
               console.log("Retrived all the campgrounds");
               res.render("campgrounds/index",{campgrounds:campgrounds});
           }
        });
    
    
});
// campground post route
//CREATE route
router.post("/",middleware.isLoggedIn,function(req,res){
   var name= req.body.name;
   var image= req.body.image;
   var description = req.body.description;
   var author={
       id:req.user._id,
       username:req.user.username
   };
   var dataObject = {name:name,image:image,description:description,author:author};
   // add the object coming the form post to the db
   Campground.create(dataObject,function(err, newCampground){
      if(err)
      {
          console.log("Error While Adding to Db");
      }
      else{
          console.log("Added to db");
          //redirect to campgrounds page
          req.flash("success","Successfully created campground");
          res.redirect("/campgrounds");
      } 
   });
    
});

//new form route for creating camp ground
//NEW route
router.get("/new",middleware.isLoggedIn,function(req,res){
   res.render("campgrounds/new"); 
});

//SHOW route - show more details about a single campgrounds
router.get("/:id",function(req,res){

    Campground.findById(req.params.id).populate("comments").exec(function(err,foundCampgrounds){
        if(err){
            console.log("error in show route");
            console.log(err);
        }else{
            console.log(foundCampgrounds);
                res.render("campgrounds/show",{campgrounds:foundCampgrounds});        
        }
    });
    
});

//Edit campground route
router.get("/:id/edit",middleware.isUserAuthenticatedAndAuthorised,function(req,res){
                
        Campground.findById(req.params.id,function(err,foundCampgrounds)
        {
            res.render("campgrounds/edit",{campground:foundCampgrounds});
        });   
});

//Updating campgrounds route
router.put("/:id",middleware.isUserAuthenticatedAndAuthorised,function(req,res){
    
    Campground.findByIdAndUpdate(req.params.id,req.body.campground,function(err,foundCampgrounds){
       if(err){
           console.log("there is an error in Put route of campground");
           res.redirect("/campgrounds")
       }else{
           req.flash("success","Successfully Updated Campground");
            res.redirect("/campgrounds/" + req.params.id);        
       } 
    });
    
    
});

//Destroy/Delete a Campground
router.delete("/:id",middleware.isUserAuthenticatedAndAuthorised,function(req,res){
   
   Campground.findByIdAndRemove(req.params.id,function(err){
       if(err){
           console.log("err in campground route");
           res.redirect("/campgrounds");
       }else{
           req.flash("success","Successfully deleted campground");
           res.redirect("/campgrounds");
       }
   })
    
});

module.exports = router;