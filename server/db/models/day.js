const Sequelize = require('sequelize')
const db = require('../db')

const Day = db.define('day', {
  nameOfDay: {
    type: Sequelize.STRING,
    primaryKey: true,
    validate: {isIn: [['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']]}
  },

})

module.exports = Day
