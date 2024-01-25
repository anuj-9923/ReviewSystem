const Sequelize = require('sequelize');
const sequelize = new Sequelize('Sys', 'root', 'Mysql@2647', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;