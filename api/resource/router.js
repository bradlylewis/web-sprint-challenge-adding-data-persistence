const express = require('express')
const Resource = require('./model')
const router = express.Router()

// RETRIEVES ALL THE RESOURCES
router.get('/', (req, res, next) => {
    Resource.getAll()
        .then(Resources => {
            res.json(Resources)
        })
        .catch(next)
})

// INSERTS A RESOURCE INTO THE DATABASE
router.post('/', async (req, res, next) => {
    try {
        const resource = await Resource.create(req.body)
        res.json(resource)
    } catch(err) {
        next(err)
    }
})



module.exports = router;