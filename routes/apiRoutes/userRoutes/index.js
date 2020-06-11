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


// /api/user/stock
router.route('/stock')
  .get(requireAuth, getUserStocks)
  .post(requireAuth, addStock);

// /api/user/emails

// /api/user/stock/:todoID
router.route('/stock/:stockId')
  .delete(requireAuth, deleteUserStockById)
  .put(requireAuth, updateStockById);

module.exports = router;
