define([
	'Stats'
], function(Stats) {

	// Create the stats in top left
	var stats = new Stats();
	stats.setMode(0);
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.left = '0px';
	stats.domElement.style.top = '0px';
	document.body.appendChild(stats.domElement);

	// Return for use
	return stats;

});