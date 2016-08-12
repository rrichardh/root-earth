function onDocumentReady(){
	var map = L.map('mapa', {
	    center: [0, -22],
	    zoom: 3
	});

	var tiles = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

	var marker = L.marker([0, -23]);

	map.addLayer(tiles); //añadir al mapa
	map.addLayer(marker);

	map.locate({
		enableHighAccuracy: true
	});

	map.on('locationFound', onLocationFound);

	function onLocationFound(position){
		console.log(position);
	}
}

$(document).on('ready', onDocumentReady);