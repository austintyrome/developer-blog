const router = require('express').Router();

const userRoutes = require('./user-routes');
const blogRoutes = require('./blog-routes');
const comment = require('./comment-routes')

router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);
router.use('/comments', comment);

module.exports = router;