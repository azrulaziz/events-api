const   express = require('express'),
        app = express(),
        mongoose = require('mongoose');
        cors = require('cors');

// intialize cors helper to handle cross domain request
app.use(cors());

// connect mongoDB to express
mongoose.connect(process.env.DATABASEURL);

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