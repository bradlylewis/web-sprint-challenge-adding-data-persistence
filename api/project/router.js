const express = require('express')
const Projects = require('./model')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.json({ message: "Project get!"})
    next()
})

router.post('/', (req, res, next) => {
    res.json({ message: "Project Post!"})
    next()
})



module.exports = router;