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
  saveUninitialized: true
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

// Start server
app.listen(1010, () => {
  console.log("Server running at http://localhost:1010");
});