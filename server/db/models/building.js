const crypto = require('crypto')
const { INTEGER } = require('sequelize')
const Sequelize = require('sequelize')
const db = require('../db')

const Building = db.define('building', {
	buildingID: {
		type: Sequelize.INTEGER,
		primaryKey: true
	},

	buildingType: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: { notEmpty: true, isAlpha: true }
	}
})

module.exports = Building
