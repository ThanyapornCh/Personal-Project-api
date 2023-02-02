require('dotenv').config();
const { sequelize } = require('./models');
const express = require('express');
const app = express();

// sequelize.sync({ force: true });

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`start server at ${port}`));
