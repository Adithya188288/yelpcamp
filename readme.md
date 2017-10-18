
#yelpcamp

* add a Landing Page
* add a campground page that list all the campgrounds.

#each campground has
* Name
* Image

#basic styling
* create header and footer partials
* Add in Bootstrap

#creating new campgrounds
* Setup a new campground post route
* Add in body-parser
* setUp route to show form
* add a basic unstyle form

#style the campgrounds page

* Make the header a Better title
* Make the Campground Display in a grid

#style the navbar and the form
* Add navbar to all the templates.
* Style the new Campground form.


#Add Mongoose
* Install and Configure Mongoose
* Setup Campground Model
* use the campground model inside our routes.

#show page
* Review the restful routes we have seen so far
* Add description to our campground model.
* Show db.collections.drop
* Add a show/route template.


RESTFUL ROUTES

name          url        verb       description
================================================================

INDEX        /dogs       /GET    display the list of all then dogs.
NEW          /dogs/new   /GET    display a form to add a new dog.
CREATE       /dogs       /POST   Add a new dog to db.
SHOW         /dogs/:id   /GET    Shows Information about one dog.



# Refactor Mongoose Code
* Add a models Directory
* Use modules.exports
* Require Everything correctly

#Add seed File
* Add a seeds.js file.
* Run that file everytime the server starts. 



##Add the Comment model!
* Make our errors go away!
* Display comments on campground show page

##Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

##Style Show Page
* Add sidebar to show page
* Display comments nicely

##Finish Styling Show Page
* Add public directory
* Add custom stylesheet

##Auth Pt. 1 - Add User Model
* Install all packages needed for auth
* Define User model 

##Auth Pt. 2 - Register
* Configure Passport
* Add register routes
* Add register template

##Auth Pt. 3 - Login
* Add login routes
* Add login template

##Auth Pt. 4 - Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar

##Auth Pt. 5 - Show/Hide Links
* Show/hide auth links in navbar 

##Refactor The Routes
* Use Express router to reoragnize all routes

##Users + Comments
* Associate users and comments
* Save author's name to a comment automatically

##Users + Campgrounds
* Prevent an unauthenticated user from creating a campground
* Save username+id to newly created campground

# Editing Campgrounds
* Add Method-Override
* Add Edit Route for Campgrounds
* Add Link to Edit Page
* Add Update Route

#Deleting Campgrounds
* Add Destroy Route
* Add Delete button

#Authorization Part 1: Campgrounds
* User can only edit his/her campgrounds
* User can only delete his/her campgrounds
* Hide/Show edit and delete buttons

#Editing Comments
* Add Edit route for comments
* Add Edit button
* Add Update route

<!--/campgrounds/:id/edit-->
<!--/campgrounds/:id/comments/:comment_id/edit-->

#Deleting Comments
* Add Destroy route
* Add Delete button

#Authorization Part 2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactor Middleware

#Adding in Flash!
* Demo working version
* Install and configure connect-flash
* Add bootstrap alerts to header


RESTFUL ROUTES

name      url      verb    desc.
===============================================
INDEX   /dogs      GET   Display a list of all dogs
NEW     /dogs/new  GET   Displays form to make a new dog
CREATE  /dogs      POST  Add new dog to DB
SHOW    /dogs/:id  GET   Shows info about one dog

INDEX   /campgrounds
NEW     /campgrounds/new
CREATE  /campgrounds
SHOW    /campgrounds/:id

NEW     campgrounds/:id/comments/new    GET
CREATE  campgrounds/:id/comments      POST

























