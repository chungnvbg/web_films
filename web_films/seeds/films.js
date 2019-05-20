exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('films').del()
    .then(function () {
      // Inserts seed entries
      return knex('films').insert([
        {   
            id: 1,
            id_genre: 1,
            name: '1st Film',
            link: '../movies/1.mp4',
            description: 'Just a normal music video',
        },
        {   
            id: 2,
            id_genre: 2,
            name: '2st Film',
            link: '../movies/2.mp4',
            description: 'Just a normal music video',
        },
        {   
            id: 3,
            id_genre: 3,
            name: '3st Film',
            link: '../movies/3.mp4',
            description: 'Just a normal music video',
        },
        {   
            id: 4,
            id_genre: 4,
            name: '4st Film',
            link: '../movies/4-+.mp4',
            description: 'Just a normal music video',
        },
      ]);
    });
};




