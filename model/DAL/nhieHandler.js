'use strict';

const Nhie = require(__dirname + '/Schemas/nhie.js');

const add = (question, adult) => new Nhie({question, adult}).save();
const findAllQuestions = () => Nhie.find({}).exec();

module.exports = {
  add,
  findAllQuestions,
};