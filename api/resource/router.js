const express = require('express')
const Resources = require('./model')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.json({ message: "Resource Get!"})
    next()
})

router.post('/', (req, res, next) => {
    res.json({ message: "Resource Post!"})
    next()
})



module.exports = router;