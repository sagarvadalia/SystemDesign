const crypto = require('crypto')
const { INTEGER } = require('sequelize')
const Sequelize = require('sequelize')
const db = require('../db')

const Semester = db.define('semester', {
	semesterID: {
		type: Sequelize.INTEGER,
		primarykey: true
	},
	semesterName: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: { notEmpty: true, isAlpha: true }
	},
	yearNum: {
		type: Sequelize.INTEGER,
		allowNull: false,
		validate: { notEmpty: true, isNumeric: true }
	}
})

module.exports = Semester
