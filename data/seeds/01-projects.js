const projects = [
    { project_name: 'Fix Table', project_description: 'Sand down the table and paint it, then build the leg for it and put it back together.' },
    { project_name: 'Build Treestand', project_description: 'Build a treestand for the kids.' },
    { project_name: 'Create Side Hustle', project_description: 'Do whatever needs to be done to start making extra money on the side.' },
  ]
  
  exports.projects = projects
  
  exports.seed = function (knex) {
    return knex('projects').insert(projects)
  }