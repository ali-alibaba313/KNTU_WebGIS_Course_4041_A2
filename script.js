// Create base map layer (OpenStreetMap)
const osmLayer = new ol.layer.Tile({
    source: new ol.source.OSM()
  });
  
  // Initialize map
  const map = new ol.Map({
    target: 'map',
    layers: [osmLayer],
    view: new ol.View({
      center: ol.proj.fromLonLat([0, 0]), // Greenwich
      zoom: 2
    })
  });
  