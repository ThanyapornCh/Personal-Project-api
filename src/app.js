// const { sequelize } = require('./models');
// sequelize.sync({ force: true });

require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const chalk = require('chalk');

const notFoundMiddlleware = require('./middlewares/not-found');
const errorMiddleware = require('./middlewares/error');

const authRoute = require('./routes/user-route');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoute);

app.use(notFoundMiddlleware);
app.use(errorMiddleware);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`start server at ${port}`));
