const mongoose = require('mongoose');

// mongodb schema setup
const eventSchema = new mongoose.Schema({
    event_name: String,
    event_date: String,
    event_price: Number,
    event_image: String,
    event_type: String,
});

// model setup
const Event = mongoose.model("Event", eventSchema);

// export the db model
module.exports = mongoose.model('Event');