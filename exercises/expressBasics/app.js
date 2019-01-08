const express = require("express"),
app = express();


app.get('/', (req, res) => {
   res.send('Hi there, welcome to my assignment!') ;
});

app.get('/speak/:animal', (req, res) => {
    let animal = req.params.animal,
    result;
    
    switch(animal) {
        case 'pig':
            result = 'The pig says "Oink"';
            break;
        case 'cow':
            result = 'The cow says "Moo"';
            break;
        case 'dog':
            result = 'The dog says "Woof Woof!"';
            break;
    }
    
    res.send(result);
});

app.get('/repeat/:string/:amount', (req, res) => {
    let string = req.params.string + ' ',
    amount = Number(req.params.amount);
    
    
    res.send(string.repeat(amount));
});

app.get('*', (req, res) => {
    res.send(`Sorry, page not found...What are you doing with your life?`);
});

app.listen(process.env.PORT, process.env.IP, () => {
    console.log(`server has started`);
});