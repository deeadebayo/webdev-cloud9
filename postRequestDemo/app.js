const express = require('express'),
    app = express(),
    bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');

let friends = ['Tony', 'Miranda', 'Justin', 'Pierre', 'Lily'];

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/friends', (req, res) => {
    // let friends = ['Tony', 'Miranda', 'Justin', 'Pierre', 'Lily'];
    res.render('friends', { friends: friends });
});

app.post('/addfriend', (req, res) => {
    let newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect(`/friends`);
});

app.listen(process.env.PORT, process.env.IP, () => {
    console.warn(`Server started!!!`);
});
