const { User } = require('../models');

const userData = [{
        username: 'tiffany7809',
        password: 'budbasaur'

    },
    {
        username: 'JackSparrow',
        password: 'whyistherumgone'
    },
    {
        username: 'JoJo',
        password: 'diooo'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;