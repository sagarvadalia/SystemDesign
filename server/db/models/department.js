const crypto = require('crypto')
const {INTEGER} = require('sequelize')
const Sequelize = require('sequelize')
const db = require('../db')

const Department = db.define('department', {
  deptID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  deptName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true, isAlpha: true},
  },
  deptEmail: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true, isEmail: true},
  },
  deptPhone: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true, isPhone: true},
  },
  deptManager: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true, isAlpha: true},
  },
})

module.exports = Department
