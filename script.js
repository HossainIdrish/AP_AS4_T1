require([
  "esri/Map",
  "esri/layers/FeatureLayer",
  "esri/views/MapView",
  "dojo/domReady!"
], function(
  Map,
  FeatureLayer,
  MapView
) {

  // Create the map
  var map = new Map({
    basemap: "gray"
  });

  // Create the MapView
  var view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-91.1, 38.6],
    zoom: 10
  });

  var template = {
    title: "Saint Louis Neighborhood: {NHD_NAME}",
    content: [{
      type: "fields",
      fieldInfos: [{
        fieldName: "NHD_NAME",
        label: "Neighborhood Name: ",
        visible: true
      }, {
        fieldName: "NHD_NUM",
        label: "Neighborhood Number: ",
        visible: true
      }]
    }]
  };

  var featureLayer = new FeatureLayer({
    url: "https://services2.arcgis.com/bB9Y1bGKerz1PTl5/ArcGIS/rest/services/STL_Neighborhood/FeatureServer/0",
    outFields: ["*"],
    popupTemplate: template,
    renderer: {  // Now uncommented and updated
      type: "simple",  // autocasts as new SimpleRenderer()
      symbol: {
        type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
        size: 6,
        color: "purple",  // Color changed to blue
        outline: {  // autocasts as new SimpleLineSymbol()
          width: 0.6,
          color: "white"
        }
      }
    }
  });
  
  map.add(featureLayer);
});
