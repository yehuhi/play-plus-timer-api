const mongoose = require('mongoose');

// Schema Mongoose
let dataSchema = new mongoose.Schema({

    data: {
        userName: String,
        password: String
    }


    // 0.0.0.0/0

});
// In the model mongoose 'users' is the collection in the DB
module.exports = mongoose.model('users', dataSchema)