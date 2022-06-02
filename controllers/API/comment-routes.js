const router = require('express').Router();

const { Comment } = require('../../models');

const withAuth = require('../../utils/auth');

//GET /api/comments/ route (get all comments)
router.get('/', (req, res) => {
    Comment.findAll({})
        .then(CommentData => res.json(CommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

//GET /api/comments/:id route (find comment by id)
router.get('/:id', (req, res) => {
    Comment.findAll({
            where: {
                id: req.params.id
            }
        })
        .then(CommentData => res.json(CommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});


//POST /api/comments/ route (create a new comment)
router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Comment.create({
                comment_text: req.body.comment_text,
                post_id: req.body.post_id,
                user_id: req.session.user_id,
            })
            .then(CommentData => res.json(CommentData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    }
});

//PUT /api/comments/:id route (update a comment)
router.put('/:id', withAuth, (req, res) => {
    Comment.update({
        comment_text: req.body.comment_text
    }, {
        where: {
            id: req.params.id
        }
    }).then(CommentData => {
        if (!CommentData) {
            res.status(404).json({ message: 'Sorry! No comment was found with this id' });
            return;
        }
        res.json(CommentData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//DELETE /api/comments/:id route (delete a comment)
router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    }).then(CommentData => {
        if (!CommentData) {
            res.status(404).json({ message: 'Sorry! No comment was found with this id' });
            return;
        }
        res.json(CommentData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;