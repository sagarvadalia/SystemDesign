const crypto = require('crypto')
const {INTEGER} = require('sequelize')
const Sequelize = require('sequelize')
const db = require('../db')

const Administrator = db.define('administrator', {
  adminSalary: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notempty: true}
  },
  adminOfficeNum: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notempty: true, isAlphaNumeric: true}
  }
})

module.exports = Administrator
