const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const PORT = 3000;
const sequelize = require('./utils/database');
const Sequelize = require('sequelize');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

const indexRouter =  require('./routes/reviews')

app.use('/',indexRouter);

sequelize
.sync()
.then(op => {
    console.log(`server is listening on ${PORT}`)
    app.listen(PORT);
})
.catch(err => {
    console.log(err);
})