// const mongoose = require('mongoose');
// const database = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/dataDB";
// mongoose.connect(database, {
//         useUnifiedTopology: true,
//         useNewUrlParser: true
//     })
//     .then(() => {
//         console.log('MongoDB connected :)');
//     }).catch(err => {
//         console.log('MongoDB NOT connected :( \n' + err);
//     });

// mongoose.connection.on('CONNECTED', () => {
//     console.log(`${database} --- CONNECTED`);
// });


const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://yaal-2122:wsmJQ3ggbFxFtHX@cluster0.uhcay.mongodb.net/dataDB?retryWrites=true&w=majority')

.then(() => {
    console.log('MongoDB connected :)');
}).catch(err => {
    console.log('MongoDB NOT connected :( ' + err);
})


// 'mongodb+srv://yaal-2122:wsmJQ3ggbFxFtHX@cluster0.uhcay.mongodb.net/subscriptionsDB?retryWrites=true&w=majority'