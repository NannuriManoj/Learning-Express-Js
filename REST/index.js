// Import express framework
const express = require('express');
const app = express();
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');
// Node.js path module (used to resolve folder paths safely)
const path = require('path');

/**
 * -------- MIDDLEWARE --------
 */
app.use(methodOverride('_method'));
// Parses form data sent via HTML forms (POST /comments)
// Makes form data available on req.body
app.use(express.urlencoded({ extended: true }));

// Parses JSON request bodies (used in APIs / Postman / fetch)
// Makes JSON data available on req.body
app.use(express.json());

/**
 * -------- VIEW ENGINE SETUP --------
 */

// Tells Express where EJS templates are located
app.set('views', path.join(__dirname, 'views'));

// Tells Express that we are using EJS as the template engine
app.set('view engine', 'ejs');

/**
 * -------- FAKE DATABASE --------
 * This array represents stored comments.
 * In real apps, this would be a database.
 * Here, we are using an in-memory array.
 */
let comments = [
    { id: uuid(),username: 'Jay', comment: 'There you go guys...' },
    { id: uuid(),username: 'Moni', comment: 'Hey, Hii..Manoj' },
    { id: uuid(),username: 'Moni', comment: 'Hey, Hii..Manoj' },
    { id: uuid(),username: 'Manoj', comment: 'Hello Community' }
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

    // res.render():
    // Renders an EJS template into HTML and sends it to the browser
    // Also passes data (comments) to the template
    res.render('comments/index.ejs', { comments });
});

/**
 * READ (GET)
 * GET /comments/new
 * Purpose: Show form to CREATE a new comment
 */
app.get('/comments/new', (req, res) => {

    // res.render():
    // Sends the HTML form page to the browser
    res.render('comments/new.ejs');
});

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id)
    res.render('comments/show', { comment });
});

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id)
    res.render('comments/edit', { comment });
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newComment = req.body.comment;
    const foundComment = comments.find(c => c.id === id)
    foundComment.comment = newComment;
    res.redirect('/comments');
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
});

/**
 * CREATE (POST)
 * POST /comments
 * Purpose: Create a new comment and store it
 */
app.post('/comments', (req, res) => {
    const { username, comment } = req.body;

    // Add new comment to "database" (in-memory array)
    comments.push({ username, comment, id: uuid() });

    // res.redirect():
    // Sends a redirect response to the browser
    // Browser will make a NEW GET request to /comments
    // This follows the POST -> REDIRECT -> GET pattern
    // Default status code is 302
    res.redirect('/comments');

    // Note:
    // res.send() could be used to send plain text or JSON,
    // but redirect is preferred here to avoid form re-submission.
});

/**
 * -------- SERVER --------
 */
app.listen(3000, () => {
    console.log("Listening on port 3000");
});
