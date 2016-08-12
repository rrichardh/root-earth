function onDocumentReady(){
	var map = L.map('mapa', {
	    center: [0, -22],
	    zoom: 3
	});

	var tiles = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

	map.addLayer(tiles); //añadir al mapa

	map.locate({
		enableHighAccuracy: true
	});

	map.on('locationfound', onLocationFound);

	function onLocationFound(position){
		console.log(position);

		var miCoordenada = position.latlng;
		var marker = L.marker([miCoordenada.lat, miCoordenada.lng]);
		
		map.addLayer(marker);
		marker.bindPopup('Estoy Aquí'); //creando Popup
	}
}

$(document).on('ready', onDocumentReady);