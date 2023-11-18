require('dotenv/config')

const express = require('express');

const routes = require('./router');

const app = express();

app.use(express.json());

app.use(routes);

PORT = process.env.PORT ?? 3000;

app.listen(PORT);