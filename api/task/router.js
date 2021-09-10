const express = require('express')
const Task = require('./model')
const router = express.Router()

// SENDS TASKS AS A RESPONSE
router.get('/', async (req, res, next) => {
    try {
    const tasks = await Task.getAll();
        res.json(tasks);
    } catch (err) {
        next(err);
    }
})

// POSTS TASK TO DATABASE
router.post('/', async (req, res, next) => {
    try {
        const task = await Task.create(req.body);
        res.json(task);
    } catch (err) {
        next(err);
    }
})

module.exports = router;