var express   = require("express");
var router    = express.Router();
var passport  = require("passport");
var User      = require("../models/User"); 

//landing route
router.get("/",function(req,res){
   res.render("landing"); 
});




// AUTh routes  

//Register route

router.get("/register",function(req, res) {
   
   res.render("register");
    
});

router.post("/register", function(req,res){
   
   var newUser = new User({username:req.body.username});
   User.register(newUser,req.body.password,function(err,user){
      
        if(err){
            console.log(err);
            req.flash("error", err.message);
            return res.render("register");
        }
        passport.authenticate("local")(req,res,function(){
           
           req.flash("success","Welcome " + user.username);
           res.redirect("/campgrounds");
            
        });
       
   });
});


//login route

router.get("/login",function(req, res) {
   res.render("login");
});

router.post("/login",passport.authenticate("local",{
    
    successRedirect:"/campgrounds",
    failureRedirect:"/login",
    failureFlash: true,
    successFlash:"Welcome Back" 
    
}),function(req, res) {
    
});

//log out route

router.get("/logout", function(req, res) {
    req.logout();
    req.flash("success","Successfully Logged Out")
    res.redirect("/campgrounds");
});

module.exports = router;