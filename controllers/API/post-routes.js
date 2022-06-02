const router = require('express').Router();

const { Post, User, Comment } = require('../../models');

const withAuth = require('../../utils/auth');

//GET /api/posts/ (show all posts)
router.get('/', (req, res) => {

    Post.findAll({
            attributes: ['id',
                'title',
                'content',
                'created_at'
            ],
            order: [
                ['created_at', 'DESC']
            ],
            include: [{
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                }
            ]
        })
        .then(PostData => res.json(PostData.reverse()))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//GET api/posts/:id (search post by id)
router.get('/:id', (req, res) => {
    Post.findOne({
            where: {
                id: req.params.id
            },
            attributes: ['id',
                'content',
                'title',
                'created_at'
            ],
            include: [{
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                }
            ]
        })
        .then(PostData => {
            if (!PostData) {
                res.status(404).json({ message: 'Sorry! No post was found with this id' });
                return;
            }
            res.json(PostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//POST /api/posts/ route (create a new post)
router.post('/', withAuth, (req, res) => {
    Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id
        })
        .then(PostData => res.json(PostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//PUT /api/posts/:id route (update a post)
router.put('/:id', withAuth, (req, res) => {
    Post.update({
            title: req.body.title,
            content: req.body.content
        }, {
            where: {
                id: req.params.id
            }
        }).then(PostData => {
            if (!PostData) {
                res.status(404).json({ message: 'Sorry! No post was found with this id' });
                return;
            }
            res.json(PostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//DELETE /api/posts/:id route (delete a post)
router.delete('/:id', withAuth, (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(PostData => {
        if (!PostData) {
            res.status(404).json({ message: 'Sorry! No post was found with this id' });
            return;
        }
        res.json(PostData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;