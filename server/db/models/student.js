const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Student  = db.define('student', {
  sID: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  sGPA: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {notEmpty: true, isFloat: true}
  },
  sGradYear: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {notEmpty: true, isNumeric: true}
  },
  sMajor: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true, isAlpha: true}
  },
  sMinor: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true, isAlpha: true}
  },
  sDOB: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true, isDate: true}
  },
  totalCredits: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {notEmpty: true, isNumeric: true}
  },
  currentCredits: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {notEmpty: true, isNumeric: true}
  },
  isGradStudent: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    validate: {notEmpty: true}
  },
  isFullTime: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    validate: {notEmpty: true}
  }
})

module.exports = Student
