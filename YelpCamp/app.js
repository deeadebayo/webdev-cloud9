const express = require("express"),
    app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('landing');
});

app.get('/campgrounds', (req, res) => {
    const campgrounds = [
        { name: "Salmon Creek", image: "https://visitrainier.com/wp-content/uploads/2014/02/Camping-at-White-River-Campground-e1527786151787.jpg" },
        { name: "Granite Hill", image: "https://visitrainier.com/wp-content/uploads/2014/02/Camping-at-White-River-Campground-e1527786151787.jpg" },
        { name: "Mountain Goat's Rest", image: "https://visitrainier.com/wp-content/uploads/2014/02/Camping-at-White-River-Campground-e1527786151787.jpg" }
    ]

    res.render('campgrounds', { campgrounds: campgrounds });
});

app.listen(process.env.PORT, process.env.IP, () => {
    console.log(`YelpCamp Server has started!`);
});
