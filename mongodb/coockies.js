import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'session'
const app = express();


app.use(session({
    secret:"gops",
}))
// Settings
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.get('/login', (req, res) => {
  res.render('login'); // renders views/login.ejs
});

app.post('/profile', (req, res) => {
 
  res.render('profile'); // renders views/profile.ejs
});

app.get('/', (req, res) => {
  const userName = req.cookies.name || 'Guest';
  console.log('User name from cookie:', userName);
  res.render('home', { name: userName }); // renders views/home.ejs
});



// Start server
app.listen(2030, () => {
  console.log('Server running at http://localhost:2030');
});