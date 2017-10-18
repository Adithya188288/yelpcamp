//import all the npm packages
var express              = require("express"),
    app                  = express(), 
    bodyparser           = require("body-parser"),
    mongoose             = require("mongoose"),
    passport             = require("passport"),
    localStrategy        = require("passport-local"), 
    Campground           = require("./models/campgrounds"),
    User                 = require("./models/User"),
    seedsDB              = require("./seeds"),
    Comments             = require("./models/Comments"),
    methodOverride       = require("method-override"),
    flash                = require("connect-flash");
    
var CommentsRoute        = require("./routes/comment"),
    campgroundRoute      = require("./routes/campgrounds"),
    indexRoute           = require("./routes/index");
 
    

//mongoose is a tool to connect mongodb with our express app.    
//connect mongoose to mongodb.
mongoose.connect(process.env.DATABASEURL,{ useMongoClient:true });

//mongoose.connect("mongodb://adi:qwerty@ds125195.mlab.com:25195/yelpcamp");

//to use bodyparser
app.use(bodyparser.urlencoded({extended:true}));

//sending the public directory if the server is called
app.use(express.static(__dirname + "/public"));

//setting method override to app
app.use(methodOverride("_method"));

//set the default file type
app.set("view engine","ejs");
//making sure app uses connect-flash
//it helps us in displaying flash messages easier.
app.use(flash());

//call the seeds file
//seedsDB();

// Configure Passport.js

app.use(require("express-session")({
    secret:"Adithya is a good boy",
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//app own middle to run in all routes
app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    res.locals.error       = req.flash("error");
    res.locals.success     = req.flash("success");
    next();
});

app.use("/",indexRoute);
app.use("/campgrounds",campgroundRoute);
app.use("/campgrounds/:id/comments",CommentsRoute);


//create a new campground 
// Campground.create({
//     name:"Scout Valley",
//     image:"https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg",
//     description:"This Campground has a lovely view it is more beautiful and has various landscape"
// }, function(err,campground){
//     if(err){
//         console.log("We have a err");
//         console.log(err);
//     }else{
//         console.log("Added a campground");
//         console.log(campground);
//     }
// });

// var campgrounds = [
//     {name:"Salmon Ceek",image:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
//     {name:"Scout Valley",image:"https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg"},
//     {name:"Mount Salmon",image:"https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"},
//     {name:"Salmon Ceek",image:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
//     {name:"Scout Valley",image:"https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg"},
//     {name:"Salmon Ceek",image:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
//     {name:"Scout Valley",image:"https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg"}
//     ];

//code to start the server
app.listen(process.env.PORT,process.env.IP,function(){
   console.log("The YelpCamp Server has Started"); 
});