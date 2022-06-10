//Seeding the comment table in database

const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Blimey lee snow crow's nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.",
        user_id: 2,
        post_id: 4
    },
    {
        comment_text: "blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. ",
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: "Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside ",
        user_id: 1,
        post_id: 2
    },
    {
        comment_text:" Fluke jib scourge of the seven seas boatswain",
        user_id: 4,
        post_id: 1
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;