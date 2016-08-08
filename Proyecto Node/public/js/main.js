function onDocumentReady(){
	var map = L.map('mapa', {
	    center: [51.505, -0.09],
	    zoom: 13
	});

	var  tiles = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

	map.addLayer(tiles);
}

$(document).on('ready', onDocumentReady);