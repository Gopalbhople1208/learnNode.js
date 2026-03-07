import express from 'express';
import session from 'express-session';

const app = express();

// Set EJS as view engine
app.set("view engine", "ejs");

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Session middleware
app.use(session({
  secret: 'gops',
  resave: false,
  saveUninitialized: true,
   cookie: {
    maxAge: 1000 * 60 * 10   // session expires in 10 minutes
  }
}));

// Show login form
app.get("/logins", (req, res) => {
  res.render("logins"); // login.ejs
});

// Handle login form submission
app.post("/profiles", (req, res) => {
  req.session.user = req.body; // store all fields in session
  res.render("profiles", { user: req.session.user }); // pass all data to profile
});

// Home page
app.get("/homes", (req, res) => {
  const user = req.session.user; // get session data
  res.render("homes", { user }); // pass all data to home
});

app.get("/check",(req,resp)=>{
  console.log("session data:",req.session);
  console.log("session Expiry:",req.session.cookie.expires);
  resp.send("Check console");
})



// Start server
app.listen(1010, () => {
  console.log("Server running at http://localhost:1010");
});

//how to check a secret key they go to bower page inspect go application then cookies open link and .sid name file is open show the bottom said cookies value 
//console.log(decodeURIComponent("s%3AGA_qxmPLXfnuOEdu6dZqhJGolDtpJ53H.oxj%2F1hMKZhJz7KqC1GIIS4fNZ8zW0N9QlzmEf3EuQok"));