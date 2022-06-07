const express = require("express")
const router = express.Router()


// Run this code when a form is submitted to 'user-type'
router.post("/user-type", function (req, res) {
	// Make a variable and give it the value from 'user-type'
	var userType = req.session.data["user-type"]
	// Check whether theuserTypetchesPolicyion
	if (userType == "policy") {
		// Send user to next page
		res.redirect("policy-search")
	} else {
		// Send user to trade page
		res.redirect("trade-search")
	}
})

// Run this code when a form is submitted to 'policy-search'
router.post("/policy-calculate", function (req, res) {
	// Make a variable and give it the value from 'policy-search'
	var calculateCountry = req.session.data["country"]
	var calculateHost = req.session.data["host"]
	var calculateFormat = req.session.data["format"]

	// Calculate some stuff

	if (calculateCountry  && calculateHost && calculateFormat ) {
		// Send user to next page
		res.redirect("policy-results")
	} else if (calculateCountry == " " || calculateHost == " " ||  calculateFormat == " " ) {
		res.redirect("policy-search-error")
	}
})

module.exports = router;
