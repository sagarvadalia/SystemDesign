const crypto = require('crypto')
const {INTEGER} = require('sequelize')
const Sequelize = require('sequelize')
const db = require('../db')

const Researcher = db.define('researcher', {
  reserachSalary: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notempty: true}
  },
  researchOfficeNum: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notempty: true, isAlphaNumeric: true}
  }
})

module.exports = Researcher
