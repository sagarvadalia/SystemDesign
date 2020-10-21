const crypto = require('crypto')
const { INTEGER } = require('sequelize')
const Sequelize = require('sequelize')
const db = require('../db')

const Major = db.define('major', {
	majorID: {
		type: Sequelize.INTEGER,
		primarykey: true
	},
	majorName: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: { notEmpty: true, isAlpha: true }
	}
})

module.exports = Major
