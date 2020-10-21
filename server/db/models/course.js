const crypto = require('crypto')
const { INTEGER } = require('sequelize')
const Sequelize = require('sequelize')
const db = require('../db')

const Course = db.define('course', {
	courseCRN: {
		type: Sequelize.INTEGER,
		primarykey: true
	},
	courseName: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: { notEmpty: true, isAlpha: true }
	},
	courseDesc: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: { notEmpty: true, isAlpha: true }
	},
	numOfCredits: {
		type: Sequelize.INTEGER,
		allowNull: false,
		validate: { notEmpty: true, isNumeric: true }
	}
})

module.exports = Course
