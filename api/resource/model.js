const db = require('../../data/dbConfig')


// RETRIEVES ALL THE PROJECTS
function getAll() {
    return db('resources')
}

// FINDING BY SPECIFIC ID
const getById = async (id) => {
    const result = await db('resources').where('id', id).first()
    return result
  }

// CREATING AN ENTRY IN THE DATABASE
const create = async (resource) => {
    const [id] = await db('resources').insert(resource)
    return getById
  }

module.exports = {
    getAll,
    getById,
    create
}