'use strict';
const express = require('express');
const router = express.Router();
const user = require('../model/DAL/userHandler.js');

/* GET Never Have I Ever */
router.get('/', function (req, res) {
  res.render('nhie', { title: 'Never Have I Ever' });
});

router.post('/', function (req, res) {

});

module.exports = router;
