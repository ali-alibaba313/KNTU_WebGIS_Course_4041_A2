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
const GEOCODING_API_KEY = window.GEOCODING_API_KEY;

const searchBtn = document.getElementById("searchBtn");
const addressInput = document.getElementById("address");

searchBtn.addEventListener("click", async () => {
  const address = addressInput.value.trim();
  if (!address) return alert("آدرس وارد کن");

  try {
    const url = `https://us1.locationiq.com/v1/search?key=${GEOCODING_API_KEY}&q=${encodeURIComponent(address)}&format=json&limit=1`;
    const res = await fetch(url);
    const data = await res.json();

    if (!data.length) {
      alert("نتیجه‌ای پیدا نشد");
      return;
    }

    const lat = parseFloat(data[0].lat);
    const lon = parseFloat(data[0].lon);

    map.getView().animate({
      center: ol.proj.fromLonLat([lon, lat]),
      zoom: 14,
      duration: 1000
    });

  } catch (err) {
    console.error(err);
    alert("خطا در دریافت داده ژئوکدینگ");
  }
});

  