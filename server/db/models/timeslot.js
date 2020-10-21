const crypto = require('crypto')
const { INTEGER } = require('sequelize')
const Sequelize = require('sequelize')
const db = require('../db')

const TimeSlot = db.define('timeslot', {
	slotID: {
		type: Sequelize.INTEGER,
		primaryKey: true
	}
})

module.exports = TimeSlot
