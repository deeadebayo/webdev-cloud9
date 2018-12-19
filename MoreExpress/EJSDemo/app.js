const express = require("express"),
app = express();

app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.get('/fallinlovewith/:thing', (req, res) => {
    let thing = req.params.thing;
    res.render('love.ejs', {thingVar: thing});
});

app.listen(process.env.PORT, process.env.IP, () => {
    console.warn(`Server is listening!!!`);
});