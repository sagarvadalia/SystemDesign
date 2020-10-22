const Sequelize = require('sequelize')
const db = require('../db')

const Advisor = db.define('advisor', {
	dateAssigned: {
		type: Sequelize.DATE,
		allowNull: false,
		validate: { notEmpty: true, isDate: true }
	}
})

module.exports = Advisor
