const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Reviews = sequelize.define('Reviews', {
    id:
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Company: Sequelize.STRING,
    Rating: Sequelize.INTEGER,
    Pros: Sequelize.STRING,
    Cons: Sequelize.STRING
});

module.exports = Reviews;