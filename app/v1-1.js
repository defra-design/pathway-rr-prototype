const express = require('express')
const router = express.Router()

// var folder = "current"

// Routes files for URLs/folders
// router.get('/user-type', function(req, res) {
//   res.render(folder + '/user-type');
// });

// Run this code when a form is submitted to 'user-type'
router.post('/user-type', function (req, res) {

  // Make a variable and give it the value from 'user-type'
  var userType = req.session.data['user-type']
  // Check whether theuserTypetchesPolicyion
  if (userType == "policy"){
    // Send user to next page
    res.redirect('policy-search')
  } else {
    // Send user to trade page
    res.redirect('trade-search')
  }

})

// Run this code when a form is submitted to 'policy-search'
router.post('/policy-calculate', function (req, res) {

  // Make a variable and give it the value from 'policy-search'
  var calculateCountry = req.session.data['country']
  var calculateHost = req.session.data['host']
  var calculateFormat = req.session.data['format']
  // var calculateFormatFixed = req.session.data['formatFixed']

  // Calculate some stuff
  if (calculateCountry && calculateHost && calculateFormat  != " " ){
    // Send user to next page
    res.redirect('policy-results')
  }

})

// Run this code when a form is submitted to 'policy-search'
router.post('/policy-calculate-fixed', function (req, res) {

  // Make a variable and give it the value from 'policy-search'
  var calculateCountry = req.session.data['country']
  var calculateHost = req.session.data['host']
  var calculateFormat = req.session.data['format']
  // var calculateFormatFixed = req.session.data['formatFixed']

  // Calculate some stuff
  if (calculateCountry && calculateHost && calculateFormat  != " " ){
    // Send user to next page
    res.redirect('policy-results')
  }

})



module.exports = router
