const Sequelize = require('sequelize')
const db = require('../db')

const Minor = db.define('minor', {
  minorID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  minorName: {
    notEmpty: true,
    type: Sequelize.STRING,
    validate: {notEmpty: true, isAlpha: true},
  },
})

module.exports = Minor
