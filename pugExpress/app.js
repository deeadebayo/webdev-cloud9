const express = require("express"),
    app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
});

app.listen(process.env.PORT, process.env.IP, () => {
    console.warn(`Server is listening!!!`);
});
