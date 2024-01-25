const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const port = 3000;
const sequelize = require('./util/database');
//const Sequelize = require('sequelize');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

const indexRouter = require('./route/reviews')

app.use('/', indexRouter);

sequelize
    .sync()
    .then(op => {
        console.log(`server is listening on ${port}`)
        app.listen(port);
    })
    .catch(err => {
        console.log(err);
    })