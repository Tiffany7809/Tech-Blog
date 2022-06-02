const { Comment } = require('../models');

const commentData = [{
        comment_text: "Lorem ipsum dolor sit amet",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "This is the day you will always remember as the day you almost caught Captain Jack Sparrow.",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Impossible? We did a lot of impossible things on this journey. Im tired of hearing that things are impossible or useless. Those words mean nothing to us.",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;