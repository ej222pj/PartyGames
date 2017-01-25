'use strict';
const express = require('express');
const router = express.Router();
const nhie = require('../model/DAL/nhieHandler.js');

/* GET Never Have I Ever */
router.get('/', function (req, res) {
  if (req.session.questions) {
    let questionArray = req.session.questions;
    let jsonQuestions = JSON.stringify(questionArray);
    res.render('nhie', { title: 'Never Have I Ever', message: '', jsonQuestions });
  } else {
    let questionArray = req.session.questions = [];
    nhie.findAllQuestions().then(function (questions) {
      questions.forEach(function (question) {
        questionArray.push(question)
      });
      let jsonQuestions = JSON.stringify(questionArray);
      res.render('nhie', { title: 'Never Have I Ever', message: '', jsonQuestions });
    });
  }

});

router.post('/', function (req, res) {
  const formQuestion = req.body.question;
  const formAdult = req.body.adult;
  let adult = false;

  if (formAdult == 'adult') {
    adult = true;
  } else {
    adult = false;
  }

  let questionArray = req.session.questions;
  let jsonQuestions = JSON.stringify(questionArray);

  if (formQuestion.length > 0 && formQuestion.length < 60) {
    nhie.add(formQuestion, adult).then(function () {
      console.log('New question added!')
    });

    res.render('nhie', { title: 'Never Have I Ever', message: 'You have added a new question!', jsonQuestions });
  }
  else{
    res.render('nhie', { title: 'Never Have I Ever', message: 'Error adding question, try again!', jsonQuestions });
  }
});

module.exports = router;
