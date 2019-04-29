const express = require('express');
const router = express.Router();
const todosRouter = require('./routes/todos');

router.get('/add', (req, res) => {
  res.send('Hello');
});
app.use('/todos', todosRouter);


module.exports = router;