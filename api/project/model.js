const db = require('../../data/dbConfig')


// RETRIEVES ALL THE PROJECTS
async function getAll() {
  const projects = await db("projects");

  const projects2 = projects.map((project) => {
    return {
      project_name: project.project_name,
      project_description: project.project_description,
      project_completed: project.project_completed === 1 ? true : false,
    };
  });

  return projects2
}

// CREATING AN ENTRY IN THE DATABASE
async function create(project) {
  const project_id = await db("projects").insert(project);
  
  const newProject = {
    project_id: project_id,
    project_name: project.project_name,
    project_description: project.project_description,
    project_completed: project.project_completed === 1 ? true : false,
  };

  return newProject;
}

module.exports = {
    getAll,
    create
}