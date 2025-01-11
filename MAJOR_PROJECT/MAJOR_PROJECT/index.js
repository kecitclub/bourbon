const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./model/listing.js");
const Review = require("./model/review.js");
const {listingSchema} = require("./schema.js")
const port = 8080;
const path = require("path");
const methodOverride = require("method-override");
const MONGO_URL = "mongodb://127.0.0.1:27017/wonderlust";
const ejsMate = require("ejs-mate");
const flash = require("connect-flash")
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./model/user.js");
const { register } = require("module");
const session = require("express-session");
const ExpressError = require("./utils/ExpressError.js");



function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch(next);
  };
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const sessionOptions={
  secret:"mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  cookie:{
    expires: Date.now() + 7 *24*60*60*1000,
    maxAge:  7 *24*60*60*1000,
    httpOnly:true,
  }

};


const apiKey = '53446310982f42a996b3f55972f3ba93';
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNewsSources() {
  try {
      const response = await fetch(apiUrl); // Fetch news data for Nepal
      const data = await response.json(); // Parse the response JSON

      if (data.articles && data.articles.length > 0) {
          // Extract article titles and join them with a separator
          return data.articles.map(article => article.title).join(' • ');
      } else {
          return 'No news data available for Nepal.';
      }
  } catch (error) {
      console.error('Error fetching data from NewsAPI:', error.message);
      return 'Error fetching Nepal news data.';
  }
}

// Home route to fetch and display news titles for Nepal
app.get("/", async (req, res) => {
  try {
      const newsTitles = await fetchNewsSources(); // Fetch news titles for Nepal
      res.render("listings/home.ejs", { news: newsTitles }); // Send data to the view
  } catch (error) {
      console.error('Error fetching API data:', error.message);
      res.render("listings/home.ejs", { news: 'Error fetching Nepal news data.' }); // Send error message
  }
});

app.use(session(sessionOptions));
app.use(flash());


app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
    try {
      const user = await User.findOne({ email: email }); // Updated to use async/await
      if (!user) {
        return done(null, false, { message: "Incorrect email." });
      }

      const isMatch = await user.authenticate(password); // Ensure this function works as expected
      if (!isMatch) {
        return done(null, false, { message: "Incorrect password." });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
  res.locals.currUser = req.user;
  next();
})

const validateListing = (req,res,next)=>{
  let {error} = listingSchema.validate(req.body);
  if(error){
    let errMsg = error.details.map((el)=> el.message).join(",");
    throw new ExpressError(400,errMsg)
  }
  else{
    next();
  }
}

app.listen(port, () => {
  console.log(`listening to server ${port}`);
});

//Reviews
//Post Route
app.post("/listings/:id/reviews",async(req,res)=>{
  let listing = await Listing.findById(req.params.id);
  let newReview = new Review(req.body.review);

  listing.reviews.push(newReview);

  await newReview.save();
  await listing.save();

  res.redirect(`/listings/${listing._id}`)
})
//Delete Route 
app.delete("/listings/:id/reviews/:reviewId",wrapAsync( async(req,res)=>{
  let {id, reviewId} = req.params;
  await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}})
  await Review.findById(reviewId);
  res.redirect(`/listings/${id}`);
}))

//Index Route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/Recurit.ejs", { allListings });
});
//New Route
app.get("/listings/new", (req, res) => {
  if(!req.isAuthenticated()){
    req.flash("error","you must be logged in to create list");
    return res.redirect("/login")
  }
  res.render("listings/new.ejs");
});
//Show route
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id).populate("reviews").populate("owner");
  console.log(listing);
  res.render("listings/show.ejs", { listing });
});
//Create route
app.post("/listings",validateListing, async (req, res) => {
  let listing = req.body.listing;
  const newListing = new Listing({
    title: listing.title,
    description: listing.description,
    image: listing.image,
    price: listing.price,
    country: listing.country,
    location: listing.location,
  });
  await newListing.save();
  req.flash("success","New Listing Created")
  res.redirect("/listings");
});
//Edit Route
app.get("/listings/:id/edit", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
});



// app.get("/demoUser",async (req,res)=>{
//   let fakeUser =new User({
//     email: "samip@gmail.com",
//     username: "samip-shrestha"
//   })
//   let registeredUser =await User.register(fakeUser,"helloworld");
//   res.send(registeredUser)
// })
      
//Home route 

//Update Route
app.put("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/listings/${id}`);
});
// Delete Route
app.delete("/listings/:id", async (req, res) => {
 let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listings"); 
});

app.get("/show", async(req,res)=>{
  res.render("listings/showF");
});
//opportunities
app.get("/opportunitiesTeaching",async(req,res)=>{
  const allListings = await Listing.find({id : "teaching"});
  res.render("listings/Recurit",{allListings})
})
app.get("/opportunitiesCalamities",async(req,res)=>{
  const allListings = await Listing.find({id : "naturalcalamities"});
  res.render("listings/Recurit",{allListings})
})
app.get("/opportunitiesPublicHealth",async(req,res)=>{
  const allListings = await Listing.find({id : "women_empowerment"});
  res.render("listings/Recurit",{allListings})
})
app.get("/opportunitiesWomenEmpowerment",async(req,res)=>{
  const allListings = await Listing.find({id : "women_empowerment"});
  res.render("listings/Recurit",{allListings})
})




app.get("/signup",(req,res)=>{
  res.render("listings/signup.ejs")
})

app.post("/signup",async(req,res)=>{
    let {username,email,password}=req.body;
    const newUser =new User({email,username});
    const registerUser = await User.register(newUser , password);
    console.log(registerUser);
    res.redirect("/home");
})

app.get("/login", (req, res) => {
  if (req.isAuthenticated()) {
    req.flash("success", "You are already logged in.");
    return res.redirect("/listings");
  }
  res.render("listings/login.ejs");
});

app.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
   async (req, res) => {
    req.flash("success", "Welcome to HeroHub!");
    res.redirect("/"); 
  }
);

app.get("/logout",(req,res)=>{
  req.logout((err)=>{
    if(err){
      next(err);
    }
    req.flash("success","you are logged out");
    res.redirect("/");
  })
})