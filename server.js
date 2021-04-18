const express = require('express');
require('dotenv').config();
const axios = require('axios');


const HOST = 'localhost';
const PORT = '5555';
const KEY = process.env.API_KEY;

console.log(KEY);

const server = express();

server.use(express.json());
server.use(express.urlencoded());

server.use(express.static('public'));

server.get('/stuff', (req, res) => {

    axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=32901&appid=${KEY}`)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error)
    })

    res.status(200).send('Woot');

})

server.listen(PORT, (err) => {
    if (err) {
        console.log('There was a problem with the server: ', err);
    } else {
        console.log('Server says hi from ', 'http://'+HOST+':'+PORT);
    }
});
