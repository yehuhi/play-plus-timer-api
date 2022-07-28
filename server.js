const express = require('express');
const config = require('config');
const cors = require('cors');
const dataRouter = require('./routers/reportRouter');
const timerRouter = require('./routers/timerRouter');
const authRouter = require('./routers/authRouter');
// const subscriptionsRouter = require('./routers/subscriptionRouter');
// const moviesRouter = require('./routers/moviesRouter');

let port = process.env.PORT || config.get('PORT') || 5000;

const app = express();

// For any address
app.use(cors());

app.get('/', (req, resp) => {
    resp.send('Connected To PLAY PLUS TIMER API')
});

// Use DB
require('./config/database');

// Lets get data JSON not security
app.use(express.json());

// Data router API
app.use('/api/data', dataRouter);

// Timer router
app.use('/api/timer', timerRouter);

// Auth router
app.use('/api/auth', authRouter);

// Members router API
// app.use('/api/subscriptions', subscriptionsRouter);

// Movies router API
// app.use('/api/movies', moviesRouter);

// Run in 3000 address || Heroku address
app.listen(port, () => {
    console.log(`This server listening on port - ${port}`);
});

console.log('SERVER IS RUNNING :)');