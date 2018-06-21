const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');
const validator = require('validator');
 mongoose.promise = Promise

const userSchema = new mongoose.Schema({

	email: {
	  type: String,
	  unique: [true, "Email is already in use"],
	  required: [true, "Email field cannot be empty"],
	  trim: true,
	  validate: [validator.isEmail, "invalid email"]
	},
  
	password: {
	  type: String,
	  trim: true,
	  required: [true, "Password field cannot be empty"],
	  validate: [
		password => {
		  return password && password.length > 6;
		},
		"Password need to be greater than 6 characters",
	  ],
	},
  
	firstName: {
	  type: String,
	  trim: true,
	  required: [false, "First name field cannot be empty"],
	},
  
	lastName: {
	  type: String,
	  trim: true,
	  required: [false, "Last name field cannot be empty"],
	},
  
	age: {
	  type: Number,
	  trim: true,
	  required: [true, "Please Enter Your Age!"]
	},

	likedArray: {
		type: Array,
		required: [false, ""]
	},

	disLikedArray: {
		type: Array,
		required: [false, ""]
	},

	profilePicture: { 
		type: String
	}

  });

// Define schema methods
userSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('models/user.js =======NO PASSWORD PROVIDED=======')
		next()
	} else {
		console.log('models/user.js hashPassword in pre save');
		
		this.password = this.hashPassword(this.password)
		next()
	}
})

const User = mongoose.model('User', userSchema)
module.exports = User
