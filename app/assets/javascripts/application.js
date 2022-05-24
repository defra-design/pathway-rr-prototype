/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
  window.MOJFrontend.initAll()
  
   
  var calculateCountry = req.session.data["country"];
	var calculateHost = req.session.data["host"];
	var calculateFormat = req.session.data["format"];
	
	
	// var calculateFormatFixed = req.session.data['formatFixed']

	var numPestStat = "";
	var unmitigateStat = "";
	var mitigateStat = "";

	// Calculate some stuff
	if (calculateCountry == "Egypt" && calculateHost == "Solanum tuberosum" && calculateFormat == "Bulbs or tubers") {
		// Send user to next page
	}
  $(".numPestStat").html(numPestStat);
  $(".unmitigateStat").html(unmitigateStat);
  $(".mitigateStat").html(mitigateStat);

  console.log(req.session.data);
  
})



