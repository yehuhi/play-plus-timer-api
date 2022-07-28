const mongoose = require('mongoose');

// Schema Mongoose
let dataSchema = new mongoose.Schema({

    timer: {
        _id: String,
        hour: String,
        minutes: String,
        seconds: String,
    }


    // 0.0.0.0/0

});
// In the model mongoose 'timers' is the collection in the DB
module.exports = mongoose.model('timers', dataSchema)