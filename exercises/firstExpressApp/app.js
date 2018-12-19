const express = require("express"),
app = express();

// '/' => 'Hi there!'
app.get('/', (req, res) => {
   res.send(`Hi there!`);
});

// /bye => 'Goodbye!'
app.get('/bye', (req, res) => {
    res.send(`Goodbye!`);
});

// /dog 
app.get('/dog', (req, res) => {
    console.log(`request to /dog`); 
    res.send(`meow`);
});

app.get('/r/:subredditName', (req, res) => {
    let subreddit = req.params.subredditName;
    res.send(`Welcome to the ${subreddit.toUpperCase()} subreddit`);
})

app.get('*', (req, res) => {
    res.send('You are a star!!!');
});


app.listen(process.env.PORT, process.env.IP, () => {
    console.log(`server has started`);
});