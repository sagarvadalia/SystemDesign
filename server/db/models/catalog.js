const crypto = require('crypto')
const { INTEGER } = require('sequelize')
const Sequelize = require('sequelize')
const db = require('../db')

const Catalog = db.define('catalog', {
	catalogID: {
		type: Sequelize.INTEGER,
		primaryKey: true
	}
})

module.exports = Catalog
