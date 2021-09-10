const db = require('../../data/dbConfig');

// GETS ALL THE TASKS
const getAll = async () => {
    try {
        const tasks = await db('tasks');
        return tasks
           .map((task) => {
                task.task_completed === 0 ? 
                { ...task, task_completed: false } : { ...task, task_completed: true }
                });
    } catch (err) {
        return err
    }
}

// ASSISTS THE CREATE FUNCTION
// PROBABLY DIDN'T NEED TO FIND BY ID
// CHANGES 0 AND 1 TO TRUE OR FALSE
const getById = async (id) => {
    try {
        const task = await db('tasks').where({ task_id: id }).first();
        return { ...task, task_completed: task.task_completed === 0 ? false : true }
    } catch (err) {
        return err
    }
}

// ADDS A TASK TO TASKS
const create = async (task) => {
    try {
        const taskId = await db('tasks').insert(task);
        return getById(taskId[0]);
    } catch (err) {
        return err
    }
}


module.exports ={
    getAll,
    getById,
    create
} 