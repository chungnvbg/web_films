const bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { Id: 1,
          userName: 'admin',
          password:bcrypt.hashSync('123456', 10),
          role:'admin'
        }
      ]);
    });
};