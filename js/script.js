var map;
function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.5981, lng: -87.5652},
    zoom: 15
  });

  var home = new google.maps.Marker({
    position: { lat: 41.598109, lng: -87.565204},
    map: map
  });

  var infowindow = new google.maps.InfoWindow({
    content: "This is where I worked over the Summer",
  });
  infowindow.open(map, marker);

  const icons = {
    gardencenter: {
      icon: "media/download.png",
    },
  };

  var pratice = new google.maps.Marker({
    position: { lat: 41.598109, lng: -87.565204 },
    map: map
  });

  var distPoints = [
    { lat: 41.5981, lng: -87.5652 },
    { lat: 41.59810981775828,lng: -87.56520495033215 },
    { lat: 41.598109, lng: -87.565204 },
    { lat: 41.598109, lng: -87.565204 },
    { lat: 41.598109, lng: -87.565204 },
  ];

  var dist = new google.maps.Polyline({
    path: distPoints,
    geodesic: true,
    strokeColor: "#FE5F55",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  dist.setMap(map);

}

window.initMap = initMap;
