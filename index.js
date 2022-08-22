'use strict';

// !: REQUIRE THE DOTENV MODULE!!!

// TODO: Require the Express module
// TODO: Require the BODY-PARSER module

// ?: define the port number for the Express server to connect to

// TODO: instantiate the Express module

// TODO: Express will listen on the specified port


'use strict';
// initialize the environment variables with the dotenv package
require('dotenv').config();

// bring in the Express package
const express = require('express');

// instantiate the Express application
const app = express();


// set a port number for the server to listen on
const port = process.env.PORT || 3002;

// Routes
app.get('/', (req, res) => {
    res.send('Hello from the root')
})

app.get('/starwars', (req, res) => {
    res.send({
        character: 'Luke Skywalker',
        abilities: ['combat', 'White Magik', 'skating'],
        curse: 'Damned Father',
        weakness: "Princess Leia"
    })
})


// turn the server on to listen on specified port
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})



