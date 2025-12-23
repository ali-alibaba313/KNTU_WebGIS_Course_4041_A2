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

  