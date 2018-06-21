const express = require('express');
const router = express.Router();
const User = require('../database/models/user');
const passport = require('../passport');
const mongoose = require('mongoose');


router.post('/', (req, res) => {
    console.log('user signup');
    console.log(req.user);

    const { email, password, firstName, lastName, age, profilePicture } = req.body
    // ADD VALIDATION
    User.findOne({ email: email }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the email: ${email}`
            })
        }
        else {
            const newUser = new User({
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                age: age,
                profilePicture: profilePicture
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body);
        console.log(req.user)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            email: req.user.email,
            firstName: req.user.firstName,
            lastName: req.user.lastName,
            age: req.user.age,
            profilePicture: req.user.profilePicture
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        // res.json({ user: req.user, message: "this is the user object passed from '/'"});
        User.findOne(
            { _id: req.user._id }, function(err, user) {
                console.log(user);
                res.json({user: user});
            })
    } else {
        res.json({ user: null })
    }
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router