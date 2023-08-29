const express = require('express');
const { getTasks } = require('./controllers/getTasks');
const { createTask } = require('./controllers/createTask');
const { updateTask } = require('./controllers/updateTask');
const { deleteTask } = require('./controllers/deleteTask');

const route = express();

route.get('/tasks', getTasks);
route.post('/tasks', createTask);
route.put('/tasks/:id', updateTask);
route.delete('/tasks/:id', deleteTask);

module.exports = route;