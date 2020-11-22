//@ts-check

'use-strict'

const express = require('express');
const mongoose = require('mongoose');
const { json, urlencoded } = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT;
const checkroute = require('./routes/check');

const app = express();


app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors())
app.use('/check', checkroute);


app.get('/', (req, res) => {
    res.status(200).send('<p align="center"> <b> yo am i in? very nice </b> </p>');
})


mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('%c connected to the database', 'color: green');
})

mongoose.connection.on('error', err => {
    console.log(`error while connecting with db: ${err}`)
})

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})