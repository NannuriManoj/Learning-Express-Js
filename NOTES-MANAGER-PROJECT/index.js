const express = require('express');
const app = express();

const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');

const path = require('path');
app.set('views', path.join(__dirname, 'views'));

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');

let notes = [
    {
        id: uuid(),
        title: "My first note",
        content: "This is your first note",
        createdAt: "11-01-2026"
    },
    {
        id: uuid(),
        title: "Weekend Plans",
        content: "Eat Sleep Code Repeat",
        createdAt: "12-01-2026"
    }
]

app.get('/notes', (req, res) => {
    res.render('notes/index', { notes });
})

app.get('/notes/new', (req, res) => {
    res.render('notes/new');
})

app.post('/notes', (req, res) => {
    const {title, content, date} = req.body;
    notes.push({title, content, createdAt: date, id: uuid()});
    res.redirect('/notes');
})

app.get('/notes/:id', (req, res) => {
    const { id } = req.params;
    const note = notes.find( note => note.id === id);
    res.render('notes/show', { note });
})

app.get('/notes/:id/edit', (req, res) => {
    const { id } = req.params;
    const note = notes.find(note => note.id === id);
    res.render('notes/edit', { note });
})

app.patch('/notes/:id', (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    const note = notes.find(note => note.id === id);

    note.title = title;
    note.content = content;
    res.redirect(`/notes/${ id }`);
});

app.delete('/notes/:id', (req, res) => {
    const { id } = req.params;
    notes = notes.filter(note => note.id !== id);
    res.redirect('/notes');
})

app.listen(3000, ()=> {
    console.log('Listening on port 3000');
})