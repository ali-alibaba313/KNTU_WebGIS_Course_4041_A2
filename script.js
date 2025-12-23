// Safety check
console.log("OpenLayers:", ol);

// OSM layer
const osmLayer = new ol.layer.Tile({
  source: new ol.source.OSM()
});

// Map
const map = new ol.Map({
  target: 'map',
  layers: [osmLayer],
  view: new ol.View({
    center: ol.proj.fromLonLat([0, 0]),
    zoom: 2
  })
});
const searchBtn = document.getElementById("searchBtn");
const addressInput = document.getElementById("address");

// TODO: replace with your real API key
const GEOCODING_API_KEY = "YOUR_API_KEY_HERE";

searchBtn.addEventListener("click", async () => {
  const address = addressInput.value;
  if (!address) return alert("Enter an address");

  const url = `https://open.mapquestapi.com/geocoding/v1/address?key=${GEOCODING_API_KEY}&location=${address}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const location = data.results[0].locations[0].latLng;
    const lon = location.lng;
    const lat = location.lat;

    map.getView().animate({
      center: ol.proj.fromLonLat([lon, lat]),
      zoom: 12,
      duration: 1000
    });

  } catch (err) {
    alert("Geocoding failed");
    console.error(err);
  }
});

  