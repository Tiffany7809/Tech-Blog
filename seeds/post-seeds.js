const { Post } = require('../models');

const postData = [{
        title: 'Zombies!',
        content: 'Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.',
        user_id: 1

    },
    {
        title: 'Opportunity',
        content: 'Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.',
        user_id: 2
    },
    {
        title: 'Zombie Ipsum',
        content: 'Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;