// const { sequelize, User } = require('./models');
// sequelize.sync({ alter: true });

require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const chalk = require('chalk');

const notFoundMiddlleware = require('./middlewares/not-found');
const errorMiddleware = require('./middlewares/error');

const authRoute = require('./routes/user-route');
const surveyRoute = require('./routes/surveying-route');
const productsRoute = require('./routes/product-route');
const orderRoute = require('./routes/order-route');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoute);

app.use('/surveying', surveyRoute);

app.use('/products', productsRoute);

app.use('/order', orderRoute);

app.use(notFoundMiddlleware);
app.use(errorMiddleware);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`start server at ${port}`));
