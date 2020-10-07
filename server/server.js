// Require express - gives us a function
const express = require('express');

// create an instance of express by calling the function
// returned above  - gives us an object
const app = express();
const port = 5000;

// Error cannot get '/'
app.use(express.static('server/public'));

let quotesData = [
    { quote: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
    { quote: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
    { quote: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
];

let index = 0;

app.get('/quotes', (req, res) => {
    console.log('hi from get request');
    
    res.send(quotesData);
});

app.listen(port, () => {
    console.log("up and running on port: ", port);    
});

// to start | server use node server/server.js

// to shutdown | the server to control + C 