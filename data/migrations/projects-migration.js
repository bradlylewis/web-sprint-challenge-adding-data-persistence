exports.up = async function (knex) {
    await knex.schema

        // TABLES
        // PROJECTS
        .createTable('projects', table => {
            table.increments('project_id')
            table.string('project_name', 128).notNullable()
            table.string('project_description', 255)
            table.boolean('project_completed').defaultTo('false')
        })

        // RESOURCES
        .createTable('resources', table => {
            table.increments('resource_id')
            table.string('resource_name', 128).notNullable().unique()
            table.string('resource_description')
        })

        // TASKS
        .createTable('tasks', table => {
            table.increments('task_id')
            table.string('task_description').notNullable()
            table.string('task_notes')
            table.boolean('task_completed').defaultTo('false')
            table.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })

        // PROJECT_ROURCES
        .createTable('project_resources', table => {
            table.increments('id');
            table.integer('project_id')
              .unsigned()
              .notNullable()
              .references('projects_id')
              .inTable('projects')
              .onDelete("CASCADE")
              .onUpdate("CASCADE");
            table.integer('resource_id')
              .unsigned()
              .notNullable()
              .references('resources_id')
              .inTable('resources')
              .onDelete("CASCADE")
              .onUpdate("CASCADE");
        })

}

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('projects')
    await knex.schema.dropTableIfExists('resources')
    await knex.schema.dropTableIfExists('tasks')
    await knex.schema.dropTableIfExists('project_resources')

}