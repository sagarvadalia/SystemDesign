const crypto = require('crypto')
const { INTEGER } = require('sequelize')
const Sequelize = require('sequelize')
const db = require('../db')

const Period = db.define('period', {
	periodID: {
		type: Sequelize.INTEGER,
		primarykey: true
	},
	startTime: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: { notEmpty: true }
	},
	endTime: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: { notEmpty: true }
	}
})

module.exports = Period
