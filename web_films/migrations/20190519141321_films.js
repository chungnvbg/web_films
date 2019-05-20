exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('films', function (table) {
        table.increments('id');
        table.integer('id_genre').unsigned();
        table.foreign('id_genre').references('id').inTable('genres');
        table.string('name', 255).notNullable();
        table.text('link', 255).notNullable();
        table.string('description', 255).notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTable('films');
};

exports.config = { transaction:false }
