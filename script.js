// sanity check
console.log("OpenLayers:", ol);

// ---------- MAP ----------
const osmLayer = new ol.layer.Tile({
  source: new ol.source.OSM()
});

const map = new ol.Map({
  target: "map",
  layers: [osmLayer],
  view: new ol.View({
    center: ol.proj.fromLonLat([0, 0]),
    zoom: 2
  })
});

// ---------- GEOCODING (LocationIQ) ----------
const GEOCODING_API_KEY = window.GEOCODING_API_KEY;

const searchBtn = document.getElementById("searchBtn");
const addressInput = document.getElementById("address");

searchBtn.addEventListener("click", async () => {
  const address = addressInput.value.trim();
  if (!address) {
    alert("آدرس وارد کن");
    return;
  }

  try {
    const url = `https://us1.locationiq.com/v1/search?key=${GEOCODING_API_KEY}&q=${encodeURIComponent(address)}&format=json&limit=1`;
    const res = await fetch(url);
    const data = await res.json();

    if (!data || !data.length) {
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
    alert("خطا در ژئوکدینگ");
  }
});

const WEATHER_API_KEY = window.WEATHER_API_KEY;

// div نمایش هوا
const weatherDiv = document.createElement("div");
weatherDiv.style.position = "absolute";
weatherDiv.style.bottom = "10px";
weatherDiv.style.left = "10px";
weatherDiv.style.background = "white";
weatherDiv.style.padding = "10px";
weatherDiv.style.border = "1px solid #ccc";
weatherDiv.style.zIndex = "1000";
weatherDiv.innerHTML = "روی نقشه کلیک کن";
document.body.appendChild(weatherDiv);

// کلیک روی نقشه
map.on("click", async (evt) => {
  const [lon, lat] = ol.proj.toLonLat(evt.coordinate);

  // loading state (طبق تمرین)
  weatherDiv.innerHTML = "در حال دریافت اطلاعات هواشناسی...";

  try {
    const url = `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${lat},${lon}`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Weather API error");
    }

    const data = await res.json();

    weatherDiv.innerHTML = `
      <b>Weather</b><br/>
      Temp: ${data.current.temp_c} °C<br/>
      Condition: ${data.current.condition.text}<br/>
      Humidity: ${data.current.humidity} %
    `;
  } catch (err) {
    console.error(err);
    weatherDiv.innerHTML = "خطا در دریافت داده‌های هواشناسی";
  }
});
