const   express = require('express'),
        app = express.Router(),
        bodyParser = require('body-parser');

// setup express to use body parser
app.use(bodyParser.urlencoded({extended: true}));

// require event db model
const Event = require('../models/event')

// *** ROUTE SETUP *** //

// GET all events
app.get('/', (req, res) => {
    Event.find({}, (err, events) => {
           err ? res.send("unable to retrieve data") : res.send(events);
    })
});

// CREATE new event
app.post('/', (req, res) => {
    Event.create({
        event_name: req.body.event_name,
        event_date: req.body.event_date,
        event_price: req.body.event_price,
        event_image: req.body.event_image,
        event_type: req.body.event_type
    }, 
    (err, event) => {
        err ? res.send("unable to send data") : res.send(event);
    })
})

// READ a single event
app.get('/:id', (req, res) => {
    Event.findById(req.params.id, (err, event) => {
        err ? res.send("unable to retrieve data") : res.send(event);
    })
})

// UPDATE an event
app.put('/:id', (req, res) => {
    Event.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, event) => {
        err ? res.send("unable to update data") : res.send(event);
    })
})

// DELETE an event
app.delete('/:id', (req, res) => {
    Event.findByIdAndRemove(req.params.id, (err, event) => {
        err ? res.send("unable to delete data") : res.send(event);
    })
})

module.exports = app;