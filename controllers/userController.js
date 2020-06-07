const { User, Stock } = require('../models/index');

module.exports = {
  addStock: async (req, res) => {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'You must provide text' });
    }
    try {
      const newStock = await new Stock({ text, user: req.user._id }).save();
      // const newStock = await Stock.create({ text, user: req.user._id });
      req.user.myStocks.push(newStock);
      await req.user.save();
      return res.status(200).json(newStock);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },

  getUserByEmail: async (req,res)=>{
    try{
      const users = await User.find();
      if(!users){
        return res.status(404).json({error:'no user found'});
      }
      return res.status(200).json(users);
    }
    catch(e){
      return res.status(403).json({e})
    }
  },
  getAllUserEmails: async (req, res) => {
    console.log("checking email database...")
    const {email}=req.query
    try {
      const userEmail = await User.findOne({email}, 'email');
      return res.status(200).json(userEmail);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  // getAllUserEmails: async (req, res) => {
  //   try {
  //     const userEmail = await User.findOne({ email: req.query.email }, 'email');
  //     return res.status(200).json(userEmail);
  //   } catch (e) {
  //     return res.status(403).json({ e });
  //   }
  // },
  getUserStocks: async (req, res) => {
    try {
      // const user = await User.findById(req.user._id).populate('todos','text');
      // return res.status(200).json(user.stocks)
      const stocks = await Stock.find({ user: req.user._id });
      return res.json(stocks);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  deleteUserStockById: async (req, res) => {
    // grab stockId from req.params
    const { stockId } = req.params;
    try {
      // First find the todo by Id
      const stockToDelete = await Stock.findById(stockId);
      if (!stockToDelete) {
        return res.status(401).json({ error: 'No todo with that Id' });
      }
      // console.log('current logged in users id', req.user._id)
      // console.log('id of the user that the todo belongs to', stockToDelete.user)
      // return res.status(200).json('hello')
      // Check if the todo does not belong to the user.
      // if it doesnt, do not allow the user to delete it
      if (req.user._id.toString() !== stockToDelete.user.toString()) {
        return res.status(401).json({ error: "You cannot delete a todo that's not yours" });
      }
      //  otherwise, delete the todo
      const deletedStock = await Stock.findByIdAndDelete(stockId);
      // Respond back with the deleted todo
      return res.json(deletedStock);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  updateStockById: async (req, res) => {
    //   Grab stockId from params
      const { stockId } = req.params;
      //  grab text and completed from the database
      const { text, completed } = req.body;
      // if(!text){
      //   return res.status(400).json({error:'you must provide a text'})
      // }
  
      try {
        const stockToUpdate = await Stock.findById(stockId);
        if (!stockToUpdate) {
          return res.status(404).json({ error: 'No todo with that Id'});
        }
        if (req.user._id.toString() !== stockToUpdate.user.toString()) {
          return res.status(401).json({ error: "You cannot update a todo that's not yours" });
        }
        const updatedStock = await Stock.findByIdAndUpdate(stockId,
          { completed, text },
          { new: true });
        return res.json(updatedStock);
      } catch (e) {
        return res.status(403).json({ e });
      }
    },
};
