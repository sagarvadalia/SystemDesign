const crypto = require('crypto')
const {INTEGER} = require('sequelize')
const Sequelize = require('sequelize')
const db = require('../db')

const Department = db.define('Department', {
  deptID: {
    type: INTEGER,
    primaryKey: true
  },
  deptName: {
    type: sequelize.String,
    allowNull: false,
    validate: {notEmpty: true, isAlpha: true}
  },
  deptEmail: {
    type: sequelize.String,
    allowNull: false,
    validate: {notEmpty: true, isEmail: true}
  },
  deptPhone: {
    type: sequelize.String,
    allowNull: false,
    validate: {notEmpty: true, isPhone: true}
  },
  deptManager: {
    type: sequelize.String,
    allowNull: false,
    validate: {notEmpty: true, isAlpha: true}
  }
})

module.exports = Department
