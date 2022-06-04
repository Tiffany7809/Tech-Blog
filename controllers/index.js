const router = require('express').Router();

//require in routes
const apiRoutes = require('./API');
const dashboardRoutes = require('./dashboard-routes.js');
const homeRoutes = require('./home-routes.js');


//middleware for routes
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);


router.use((req, res) => {
    res.status(404).end();
});


module.exports = router;