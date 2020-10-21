const Sequelize = require('sequelize')
const db = require('../db')

const Faculty = db.define('faculty', {
  fID: {primaryKey: true, type: Sequelize.INTEGER},
  ftenure: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    validate: {notEmpty: true},
  },
  fOfficeNumber: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true, isAlphanumeric: true},
  },
  isFullTime: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    validate: {notEmpty: true},
  },
})

module.exports = Faculty
