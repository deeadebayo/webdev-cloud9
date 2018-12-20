const express = require("express"),
app = express();

app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.get('/fallinlovewith/:thing', (req, res) => {
    let thing = req.params.thing;
    res.render('love.ejs', {thingVar: thing});
});

app.get('/posts', (req, res) => {
    const posts = [
            {title: 'Post 1', author: 'Susy'},
            {title: 'A good title', author: 'Charlie'},
            {title: 'Supper Food', author: 'Richie'}
        ];
        
        res.render('posts.ejs', {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, () => {
    console.warn(`Server is listening!!!`);
});