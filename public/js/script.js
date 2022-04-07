const coordinate = [10.3157, 123.8854];
const zoom = 10;

const map = L.map('map').setView(coordinate, zoom);

L.tileLayer(
	'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={token}',
	{
		attribution: 'Sempra Test Project',
		maxZoom: 18,
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1,
		token:
			'pk.eyJ1IjoicmVoYW4xMjM1OCIsImEiOiJjbDFvanA3eDQwbHNsM2twZHluMDl2cHM5In0.JzsA9wzWx30Es6HNdUt7aQ',
	}
).addTo(map);

const unMoveableMarker = (coordinate) =>
	L.marker(coordinate, { draggable: false });

const moveableMarker = (coordinate) =>
	L.marker(coordinate, { draggable: true });

const fisrtMarker = unMoveableMarker(coordinate).addTo(map);

fisrtMarker
	.bindPopup(
		"<div><b>Hello !</b><br/><br/>I'm the main marker can't be move. <br/><br/> right click to add another marker</div>"
	)
	.openPopup();
map.on('contextmenu', (e) => {
	const coordinate = [e.latlng.lat, e.latlng.lng];
	moveableMarker(coordinate).addTo(map);
});
