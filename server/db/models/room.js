const Sequelize = require('sequelize')
const db = require('../db')

const Room = db.define('room', {

  roomID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  roomNum: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: false,
    }
  },
  roomType: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty:false
    }
  },
  capacity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }

})

module.exports = Room
