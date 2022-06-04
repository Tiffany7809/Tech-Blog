const router = require('express').Router();

const { User, Post, Comment } = require('../../models');

//GET /api/users route
router.get('/', (req, res) => {
    User.findAll({
            attributes: { exclude: ['[password'] }
        })
        .then(UserData => res.json(UserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//GET /api/users/:id route
router.get('/:id', (req, res) => {
    User.findOne({
            attributes: { exclude: ['password'] },
            where: {
                id: req.params.id
            },
            include: [{
                    model: Post,
                    attributes: [
                        'id',
                        'title',
                        'content',
                        'created_at'
                    ]
                },
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'created_at'],
                    include: {
                        model: Post,
                        attributes: ['title']
                    }
                },
                {
                    model: Post,
                    attributes: ['title'],
                }
            ]
        })
        .then(UserData => {
            if (!UserData) {
                res.status(404).json({ message: 'Sorry! No user found with this id.' });
                return;
            }
            res.json(UserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//POST /api/users route (create a new user)
router.post('/', (req, res) => {

    User.create({
        username: req.body.username,
        password: req.body.password
    })

    .then(UserData => {
            req.session.save(() => {
                req.session.user_id = UserData.id;
                req.session.username = UserData.username;
                req.session.loggedIn = true;

                res.json(UserData);
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST /api/users/login route
router.post('/login', (req, res) => {
    User.findOne({
            where: {
                username: req.body.username
            }
        }).then(UserData => {
            if (!UserData) {
                res.status(400).json({ message: 'No user with that username!' });
                return;
            }
            const validPassword = UserData.checkPassword(req.body.password);

            if (!validPassword) {
                res.status(400).json({ message: 'Incorrect password!' });
                return;
            }
            req.session.save(() => {

                req.session.user_id = UserData.id;
                req.session.username = UserData.username;
                req.session.loggedIn = true;

                res.json({ user: UserData, message: 'logged in!' });
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE /api/users/:id (delete a user)
router.delete('/:id', (req, res) => {
    User.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(UserData => {
            if (!UserData) {
                res.status(404).json({ message: 'Sorry! No user was found with this id.' });
                return;
            }
            res.json(UserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST /api/users/logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// PUT /api/users/:id route
router.put('/:id', (req, res) => {

    User.update(req.body, {
            individualHooks: true,
            where: {
                id: req.params.id
            }
        })
        .then(UserData => {
            if (!UserData[0]) {
                res.status(404).json({ message: 'Sorry! No user was found with this id.' });
                return;
            }
            res.json(UserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

});



module.exports = router;