const router = require('express').Router();
const {
  getUserStocks,
  deleteUserStockById,
  updateStockById,
  getAllUserEmails,
  addStock,
} = require('./../../../controllers/userController');

const { requireAuth } = require('./../../../middlewares/authMiddlewares');

// /api/user/emails
router.get('/emails', getAllUserEmails);


// /api/user/todos
router.route('/todo')
  .get(requireAuth, getUserStocks)
  .post(requireAuth, addStock);

// /api/user/emails

// /api/user/todos/:todoID
router.route('/todo/:stockId')
  .delete(requireAuth, deleteUserStockById)
  .put(requireAuth, updateStockById);

module.exports = router;
