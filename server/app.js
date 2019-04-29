const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const todosRouter = require('./routes/todos');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(() => {
  console.log("connected to mongo");
}).catch((e) => {
  console.log(e);
});

const app = express();

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/todos', todosRouter);



// // Render React page
// app.use(express.static(path.join(__dirname, "../client/public/")));
// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/public/index.html"));
// });

module.exports = app;
