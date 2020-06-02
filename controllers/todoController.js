const { Todo } = require('../models');

module.exports = {
  getTodos: async (req, res) => {
    // console.log(req.query)
    try {
      const todos = await Todo.find();
      if (!todos) {
        return res.status(200).json({ error: 'No todos found' });
      }
      return res.json(todos);
    } catch (error) {
      return res.status(403).json({ error });
    }
  },
};

