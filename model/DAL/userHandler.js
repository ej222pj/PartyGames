'use strict';

const User = require(__dirname + '/Schemas/user.js');

const findWithUsername = (username) => User.findOne({ username }).exec();

module.exports = {
  findWithUsername,
};