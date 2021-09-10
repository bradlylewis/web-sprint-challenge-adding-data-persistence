const express = require('express')
const Project = require('./model')
const router = express.Router()

router.get('/', (req, res, next) => {
    Project.getAll()
        .then(projects => {
            res.json(projects)
        })
        .catch(next)
})

router.post('/', async (req, res, next) => {
    try {
        const project = await Project.create(req.body)
        res.json(project)
    } catch(err) {
        next(err)
    }
})



module.exports = router;