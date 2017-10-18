var express = require("express");
var router  = express.Router({mergeParams:true});
var Campground = require("../models/campgrounds");
var Comments   = require("../models/Comments");
var middleware = require("../middleware");


//=============================================
//COMMENT Routes
//=============================================

// displays a form to fill a new comment

router.get("/new",middleware.isLoggedIn, function(req,res){
        
        Campground.findById(req.params.id,function(err,campground){
           if(err){
            console.log("err");   
           }
           else
           {
           res.render("comments/new",{campground:campground});    
                        
           }
        });
});
//saving the comment to db and showing it
router.post("/",middleware.isLoggedIn,function(req,res){
   
   Campground.findById(req.params.id,function(err, campground) {
       if(err){
        console.log("err");   
       }else{
           Comments.create(req.body.Comments,function(err,comment){
              if(err){
                  console.log(err);
              }else{
             // Associate the comments with the user
                comment.author.id = req.user._id;
                comment.author.username = req.user.username;
                comment.save();  
               campground.comments.push(comment);
               campground.save();
               console.log(comment);
               req.flash("success","Added your comment");
               res.redirect("/campgrounds/"+ campground._id);
              }
           });
       }
   })
});

//Route to edit Comment
router.get("/:comment_id/edit",middleware.checkUserAuthenticatedAndCommentAuthorization,function(req,res){
    Comments.findById(req.params.comment_id,function(err, foundComments) {
      if(err){
          console.log("There is an err in Edit comment route");
          res.redirect("back");
      } else{
         res.render("comments/edit",{campground_id:req.params.id,Comment:foundComments});        
      } 
    });
});

//Update route for comment
router.put("/:comment_id",middleware.checkUserAuthenticatedAndCommentAuthorization,function(req,res){
   Comments.findByIdAndUpdate(req.params.comment_id,req.body.Comments,function(err,UpdatedComments){
      if(err){
          req.flash("error","Unable to update your comment");
          res.redirect("back");
      }else{
          req.flash("success","Updated Your Comments Successfully");
          res.redirect("/campgrounds/" + req.params.id);
      } 
   }); 
});

//Comments Delete Route
router.delete("/:comment_id",middleware.checkUserAuthenticatedAndCommentAuthorization,function(req,res){
    Comments.findByIdAndRemove(req.params.comment_id,function(err){
       if(err){
          req.flash("error","Unable to delete comment"); 
          res.redirect("back");
       }else{
           req.flash("success","Deleted comment successfully");
           res.redirect("/campgrounds/" + req.params.id);
       } 
    });
});

module.exports = router;