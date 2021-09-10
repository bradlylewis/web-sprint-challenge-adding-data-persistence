const db = require('../../data/dbConfig')

function getAll(){
    return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.id')
    .select('t.id', 't.description', 't.notes', 't.completed', 'p.name as project_name', 'p.description as project_description')
}

function create(project){
    return db('tasks')
    .insert(project)
    .then(([id]) => {
        return db('tasks').where({ id }).first()
    })
}

module.exports = {
    getAll,
    create
}