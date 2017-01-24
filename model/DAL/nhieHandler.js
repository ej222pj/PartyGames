'use strict';

const Nhie = require(__dirname + '/Schemas/nhie.js');

const add = (question, adult) => new Nhie({question, adult}).save();
const findAll = () => Nhie.find({}).exec();

module.exports = {
  add,
  findAll,
};