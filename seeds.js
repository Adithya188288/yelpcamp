var mongoose   = require("mongoose"),
    Campground = require("./models/campgrounds"),
    Comments   = require("./models/Comments")
   
// starting seed data

var data =[
    
    {
        name:"Seer palace",
        image:"https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg",
        description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
    },
    
    {
        name:"Deer danty",
        image:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg",
        description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
    },
    
     {
        name:"Party Don",
        image:"https://farm5.staticflickr.com/4153/4835814837_feef6f969b.jpg",
        description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
    }
    
    ];
   
    
// Remove all the campgrounds

function seedsDB(){

Campground.remove({},function(err){
//   if(err){
//       console.log(err);
//   }
//     console.log("removed campgrounds");
    
//     data.forEach(function(seed){
//         Campground.create(seed,function(err,campground){
//           if(err){
//               console.log("err in creation");
//           }
           
//           else{
              
//               console.log("added a campground");
               
//               Comments.create(
//                   {
                   
//                     title:"No inteenet connection here.Shay may kay",
//                     author:"Homer"
                   
//               },function(err,comment){
//                   if(err){
//                       console.log("error in comment creation")
//                   }else{
                      
//                     campground.comments.push(comment);
//                     campground.save();
//                     console.log("created a campground");
//                   }
//               });
//           } 
//         });
//     });       
   
});
    
}

module.exports = seedsDB;
