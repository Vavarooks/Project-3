
const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();

// Setup middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
require('./services/passport');



mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/userstockitem_db', { useNewUrlParser: true,  useUnifiedTopology: true  });

app.listen(PORT, () => console.log("Server started"));
