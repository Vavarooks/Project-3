const router = require('express').Router();
const { signUp } = require('./../../../controllers/authController');
// signIn
// const { requireSignIn } = require('../../../middlewares/authMiddlewares');

router.post('/signUp', signUp);
// router.post('/signIn', requireSignIn, signIn);

module.exports = router;
