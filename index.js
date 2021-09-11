const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req,res) => {
    res.render('home.ejs');
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() + 10) + 1;
    res.render('random.ejs', {rand: num});
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    console.log("R REQUEST");
    const data = redditData[subreddit];
    res.render('subreddit.ejs', {...data});
})

app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ]
    res.render('cats.ejs', {cats})
})

app.listen(3000, () => {
    console.log ("Listening on port 3000");
})

