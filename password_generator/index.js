const express = require('express');
const path = require('path');
const generatePassword = require('password-generator');

const app = express();

//Server static files from React app
app.use(express.static(path.join(__dirname, 'client/build')));

//API endpoints
app.get('/api/passwords', (req, res) => {
    const count = 5;

    //Generate some passwords
    const passwords = Array.from(Array(count).keys()).map(i => generatePassword(12))

    //Return them as json
    res.json(passwords);

    console.log('Sent ${count} passwords');
});

// Handler for requests that don't match the one above, Send back React's index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('Password generator listening on ${port}');