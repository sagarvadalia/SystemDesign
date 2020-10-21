const crypto = require('crypto')
const {INTEGER} = require('sequelize')
const Sequelize = require('sequelize')
const db = require('../db')

const Class = db.define('class', {
  classID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  classSection: {
    notEmpty: true,
    type: Sequelize.STRING,
  },
  numOfSeats: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
})

module.exports = Class
