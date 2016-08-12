function onDocumentReady(){
	var socket = io.connect(window.location.href);

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

	socket.on('coords:user', onReceiveData);

	function onLocationFound(position){
		console.log("position" + position);

		var miCoordenada = position.latlng;
		var marker = L.marker([miCoordenada.lat, miCoordenada.lng]);
		
		map.addLayer(marker);
		marker.bindPopup('Estoy Aquí'); //creando Popup

		socket.emit('coords:me', {latlng: miCoordenada});
	}

	function onReceiveData(data){
		console.log("data" + data);
		var coordsUser = data.latlng;
		var marker = L.marker([coordsUser.lat, coordsUser.lng]);
		
		map.addLayer(marker);
		marker.bindPopup('Estoy Aquí');
	}
}

$(document).on('ready', onDocumentReady);