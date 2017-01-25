'use strict';
const express = require('express');
const router = express.Router();
const user = require('../model/DAL/userHandler.js');

/* GET admin */
router.get('/', function (req, res) {
  if (req.session.loggedIn) {
    res.render('adminroom', { title: 'Admin Room', message: 'Welcome back boss!' });
  }

  res.render('admin', { title: 'Admin', message: '' });
});

router.post('/', function (req, res) {
  if (req.session.loggedIn) {
    res.redirect('/');
  } else {
    const formUsername = req.body.username;
    const formPassword = req.body.password;

    if (formUsername == "" || formPassword == "") {
      res.render('admin', { title: 'Admin', message: 'Wrong username or password!' });
    } else {
      user.findWithUsername(formUsername).then(function (user) {
        if (user !== null && formUsername == user.username && formPassword == user.password) {
          req.session.loggedIn = user.username;
          res.render('adminroom', { title: 'Admin Room', message: 'Welcome back boss!' });
        } else {
          res.render('admin', { title: 'Admin', message: 'Wrong username or password!' });
        }
      });
    }
  }
});

module.exports = router;
