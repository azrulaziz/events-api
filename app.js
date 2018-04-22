const   express = require('express'),
        app = express(),
        bodyParser = require('body-parser'),
        mongoose = require('mongoose');

// connect mongo to express
mongoose.connect('mongodb://lily:lily@ds253959.mlab.com:53959/event-api');

// setup the main route
app.get("/", (req, res) => {
    res.send("goto /events to GET all events list")
});

// setup events route
const Event = require('./routes/Event');
app.use('/events', Event);

// setup 404 route
app.get("*", (req, res) => {
    res.send(`No data found. Go to /events`);
})

// server listener
const port = process.env.PORT || 8000;
app.listen(port, () => {console.log('connected')});