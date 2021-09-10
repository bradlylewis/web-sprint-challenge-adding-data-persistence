const db = require('../../data/dbConfig')


// RETRIEVES ALL THE PROJECTS
function getAll() {
    return db('projects')
}

// FINDING BY SPECIFIC ID
const getById = async (id) => {
    const result = await db('projects').where('id', id).first()
    return result
  }

// CREATING AN ENTRY IN THE DATABASE
const create = async (project) => {
    const [id] = await db('projects').insert(project)
    return getById
  }

module.exports = {
    getAll,
    getById,
    create
}