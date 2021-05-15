function initMap() {
  myMap = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 59.938635, lng: 30.323118},
    zoom: 14,
  });

  addMarker({lat: 59.938635, lng: 30.323118});

  function addMarker(coordinates) {
    var marker = new google.maps.Marker({
      position: coordinates,
      map: myMap,
      icon: '../img/map-marker.png'
    });
  };
}
