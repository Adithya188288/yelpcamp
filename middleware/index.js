var Campground = require("../models/campgrounds.js"),
    Comments   = require("../models/Comments.js");


var middlewareObj = {};



middlewareObj.isLoggedIn = function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error","Please log In first");
    res.redirect("/login");
}

middlewareObj.isUserAuthenticatedAndAuthorised  = function isUserAuthenticatedAndAuthorised(req,res,next){
    
    // check if the user is logged in to edit
        if(req.isAuthenticated())
        {
                
            Campground.findById(req.params.id,function(err,foundCampgrounds)
            {
                if(err)
                {
                    console.log("there is Error in campground edit route");
                    req.flash("error","Uuable to retrive");
                    res.redirect("back");
                }   
                else
                {
                if(foundCampgrounds.author.id.equals(req.user._id))
                {
                    next(); 
                }
                else
                {
                    req.flash("error","You do not have the permission to Edit");
                    res.redirect("back");
                    console.log("you are not authorised user to edit");
                }
            }
        });   
            
            
        }
            else
            {
            req.flash("error","Please log In first");    
            res.redirect("back");
            console.log("Please log in to edit");
            }

        }  


middlewareObj.checkUserAuthenticatedAndCommentAuthorization = function checkUserAuthenticatedAndCommentAuthorization(req,res,next){
    // check if the user is looged in to edit
        if(req.isAuthenticated())
        {
            Comments.findById(req.params.comment_id,function(err,foundComments)
               {
                 if(err)
                {
                    
                    console.log("there is Error could not pass middleware check");
                    req.flash("error","Unable to retrive comment");
                    res.redirect("back");
                }   
                else
                {
                if(foundComments.author.id.equals(req.user._id))
                {
                    next(); 
                }
                else
                {
                    req.flash("error","You do not have the permission to edit this comment");
                    res.redirect("back");
                    console.log("you are not authorised user to edit");
                }
            }
        });   
            
            
        }
            else
            {
            req.flash("error","Please log In first");    
            res.redirect("back");
            console.log("Please log in to edit");
            }


        }

module.exports = middlewareObj;