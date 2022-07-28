const mongoose = require('mongoose');

// Schema Mongoose
let dataSchema = new mongoose.Schema({
    date: String,
    started_at: String,
    ended_at: String,
    total_hours_with_break: Number,
    total_hours_without_break: Number,
    break_time: Number
        // externalID: Number,
        // name: String,
        // genres: [String],
        // premiered: String,
        // image: {
        //     medium: String,
        //     original: String
        // }


    // 0.0.0.0/0

});
// In the model mongoose 'datas' is the collection in the DB
module.exports = mongoose.model('datas', dataSchema)