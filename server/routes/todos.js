const express = require('express');
const TodoItem = require('../models/TodoItem');
const router = express.Router();

router.all('/add', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
router.post('/add', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  console.log(req.body);
  const testTodo = new TodoItem({
    task: req.body.taskText
  });

  testTodo.save()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    })
});

router.get('/all', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  TodoItem.find({}, (err, todos) => {
    res.send(todos);
  });
});

router.post('/toggle', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  TodoItem.findById(req.body.id,  (err, doc) => {
    if (err) {
      console.log(err);
    }
    doc.completed = !doc.completed;
    doc.save();
  });
  res.send();
});

router.post('/remove', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  TodoItem.findByIdAndDelete(req.body.id,  (err, doc) => {
    if (err) {
      console.log(err);
    }
  });
  res.send();
});

module.exports = router;


