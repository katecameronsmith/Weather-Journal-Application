// APP API Endpoint
const projectData = {};

// Express to run server and routes 
const e = require('express');
const express = require('express');

const app = express();

app.listen(8008);
//parse json files coming from client side
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static("website"));

const cors = require('cors')



/**
app.use(cors());

app.listen(port, function(){console.log('listening on port' + port); });

 */





/* Middleware */
/*Configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


// Initialise the main project folder
app.use(express.static('website'));

const port = 8000;
// Spin up the server
const server = app.listen(port, listening);
// const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)})
// Callback to debug


function listening(){
    console.log("server running"); 
    console.log(`running on localhost: ${port}`);
};

*/