// Import express framework
const express = require('express');
const app = express();

// Node.js path module (used to resolve folder paths safely)
const path = require('path');

/**
 * -------- MIDDLEWARE --------
 */

// Parses form data sent via HTML forms (POST /comments)
app.use(express.urlencoded({ extended: true }));

// Parses JSON request bodies (used in APIs / Postman / fetch)
app.use(express.json());

/**
 * -------- VIEW ENGINE SETUP --------
 */

// Tells Express where EJS templates are located
app.set('views', path.join(__dirname, 'views'));

// Tells Express that we are using EJS
app.set('view engine', 'ejs');

/**
 * -------- FAKE DATABASE --------
 * This array represents stored comments.
 * In real apps, this would be a database - here we are using the arrays.
 */
const comments = [
    { username: 'Jay', comment: 'There you go guys...' },
    { username: 'Moni', comment: 'Hey, Hii..Manoj' },
    { username: 'Manoj', comment: 'Hello Community' }
];

/**
 * -------- REST ROUTES --------
 */

/**
 * READ (GET)
 * GET /comments
 * Purpose: Get ALL comments
 */
app.get('/comments', (req, res) => {
    res.render('comments/index.ejs', { comments });
});

/**
 * READ (GET)
 * GET /comments/new
 * Purpose: Show form to CREATE a new comment
 */
app.get('/comments/new', (req, res) => {
    res.render('comments/new.ejs');
});

/**
 * CREATE (POST)
 * POST /comments
 * Purpose: Create a new comment and store it
 */
app.post('/comments', (req, res) => {
    const { username, comment } = req.body;

    // Add new comment to "database" - here push into the array
    comments.push({ username, comment });

    // Normally REST redirects after POST
    res.send("It Worked");
});

/**
 * -------- SERVER --------
 */
app.listen(3000, () => {
    console.log("Listening on port 3000");
});
