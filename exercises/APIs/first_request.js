const request = require("request");

request('http://google.com', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        console.warn(body);
    }
    else {
        console.warn(`something went wrong!!: ${error}`);
    }
});
