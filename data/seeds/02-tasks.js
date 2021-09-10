const tasks = [
    { task_description: 'Project 1', task_notes: '', task_completed: '', project_id: 1},
    { task_description: 'Project 1', task_notes: '', task_completed: '', project_id: 1},
    { task_description: 'Project 2', task_notes: '', task_completed: '', project_id: 2},
    { task_description: 'Project 2', task_notes: '', task_completed: '', project_id: 2},
    { task_description: 'Project 3', task_notes: '', task_completed: '', project_id: 3},
    { task_description: 'Project 3', task_notes: '', task_completed: '', project_id: 3},

  ]
  
  exports.tasks = tasks
  
  exports.seed = function (knex) {
    return knex('tasks').insert(tasks)
  }