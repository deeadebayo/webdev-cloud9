const express = require("express"),
    app = express(),
    request = require('request');
// rp = require('request-promise');

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('search');
});

app.get('/results', (req, res) => {
    const query = req.query.search;
    let url = 'http://omdbapi.com/?s=' + query + '&apikey=thewdb';

    request(url, (err, response, body) => {
        if (!err && response.statusCode == 200) {
            const parsedData = JSON.parse(body);
            // res.send(parsedData.Search[2].Title);
            res.render('results', { parsedData: parsedData });
        }
        else {
            console.warn(`something went wrong!!: ${err}`);
        }
    });
});

app.listen(process.env.PORT, process.env.IP, () => {
    console.warn(`Movie app has started!!!`);
});
