const User = require('./user')
const Department = require('./department')
const Faculty = require('./faculty')
const Administrator = require('./administrator')
const Student = require('./student')
const Researcher = require('./researcher')
const Minor = require('./minor')
const Major = require('./major')
const Class = require('./class')
const Course = require('./course')
const Period = require('./period')
const Timeslot = require('./timeslot')
const Building = require('./building')
const Catalog = require('./catalog')
const Day = require('./day')
const Room = require('./room')
const Semester = require('./semester')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
	User,
	Department,
	Faculty,
	Administrator,
	Researcher,
	Student,
	Class,
	Minor,
	Major,
	Period,
	Course,
	Timeslot,
	Building,
	Catalog,
	Room,
	Semester
}
