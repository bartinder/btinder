const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');
const validator = require('validator');
 mongoose.promise = Promise

//  User Schema is Completed

const userSchema = new Schema({

	email: {
	  type: String,
	  unique: [true, "Email Is Already In Use"],
	  required: [true, "Email Field Cannot Be Empty"],
	  trim: true,
	  validate: [validator.isEmail, "Invalid Email"]
	},
  
	password: {
	  type: String,
	  trim: true,
	  required: [true, "Password Field Cannot Be Empty"],
	  validate: [
		password => {
		  return password && password.length > 6;
		},
		"Password Need to be Greater Than 6 Characters",
	  ],
	},
  
	firstName: {
	  type: String,
	  trim: true,
	  required: [true, "First Name Field Cannot Be Empty"],
	},
  
	lastName: {
	  type: String,
	  trim: true,
	  required: [true, "Last Name Field Cannot Be Empty"],
	},
  
	age: {
	  type: Number,
	  trim: true,
	  required: [true, "Please Enter Your Age"]
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
		type: String,
		required: [false, "Please Add a Profile Picture"]
  }, 
  
  friendsArray: {
    type: Array,
    required: [false, ""]
  }


	// Need to add option of profilePicture to be entered as a jpg or png as well!

	phoneNumber: {
		type: Number,
		required: [false, "Please Add Your Phone Number"],
		// validate: {
		// 	validator: function(v) {
		// 			return /d{10}/.test(v);
		// 	},
		// 	message: '{VALUE} is not a valid 10 digit number!'
		// }
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
