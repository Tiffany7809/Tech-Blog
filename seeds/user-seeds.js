//Seeding the user table in database

const { User } = require('../models');

const userData = [{
        username: 'tiffany7809',
        password: 'bulbasaur'

    },
    {
        username: 'JackSparrow',
        password: 'whyistherumgone'
    },
    {
        username: 'JoJo',
        password: 'diooo'
    },
    {
        username: 'Ash',
        password: 'pikachu'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;