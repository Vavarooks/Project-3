const router = require('express').Router();
const authRoutes = require('./authRoutes');

// const todoRoutes = require('./todoRoutes');
// const userStockRoutes = require('./userTodoRoutes');

router.use('/auth', authRoutes);

// router.use('/todos', todoRoutes);
// router.use('/user', userStockRoutes);

module.exports = router;
