const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
app.use(express.json()); 

require('dotenv').config();


app.use(function(req, res, next) {
    res.setHeader("Content-Type", "application/json");
    next();
});

const mongoString = process.env.DATABASE_URL


mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})




app.use('/api', routes);


app.listen(5000 , console.log("running"))

module.exports = database