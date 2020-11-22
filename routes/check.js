//@ts-check

'use-strict'

const express = require('express');
const quote = require('../models/Quote');
const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const gquote = await quote.find({});
        res.send(gquote);
    } catch (error) {
        res.status(404).send(error);
    }
})

router.post('/', async(req, res) => {
    const pquote = new quote({
        quotes: req.body.quotes,
        description: req.body.description
    })

    try {
        const saved = await pquote.save()
        res.send(saved);
    } catch (error) {
        res.status(404).send(error);
    }

})
module.exports = router;