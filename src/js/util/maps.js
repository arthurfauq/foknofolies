const destination = { lat: 47.75323, lng: 1.968723 };

let map;
let pos;
let infoWindow;
let directionsService;
let directionsRenderer;

const calculateRoute = () => {
  const request = { origin: pos, destination, travelMode: 'DRIVING' };

  directionsService.route(request, (result, status) => {
    if (status === 'OK') {
      directionsRenderer.setDirections(result);
    }
  });
};

const renderRoute = () => {
  infoWindow.setPosition(pos);
  infoWindow.setContent('Position approximative');
  directionsRenderer.setMap(map);

  calculateRoute();
};

const tryAPIGeolocation = () => {
  const key = 'AIzaSyAvkWZOuEAPvels14QU3zB_cX3MYMTUsOM';

  $.ajax({
    type: 'POST',
    url: `https://www.googleapis.com/geolocation/v1/geolocate?key=${key}`,
    success: location => {
      pos = { lat: location.location.lat, lng: location.location.lng };
      renderRoute();
    }
  });
};

const handleLocationError = browserHasGeolocation => {
  infoWindow.setPosition(map.getCenter());
  infoWindow.setContent(
    browserHasGeolocation
      ? "Votre service de géolocalisation n'est pas activé"
      : 'Votre navigateur ne supporte pas le service de géolocalisation.'
  );
};

// eslint-disable-next-line no-unused-vars
const initMap = () => {
  const coords = { lat: 48.3, lng: 2.2 };

  map = new google.maps.Map(document.getElementById('maps'), {
    zoom: 8,
    center: coords,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  const marker = new google.maps.Marker({
    position: destination,
    animation: google.maps.Animation.BOUNCE,
    icon: '../img/icons/balloons.png'
  });

  const marker2 = new google.maps.Marker({ position: destination, label: 'FoknoFolies' });

  marker.setMap(map);
  marker2.setMap(map);

  infoWindow = new google.maps.InfoWindow({ map });
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        pos = { lat: position.coords.latitude, lng: position.coords.longitude };
        renderRoute();
      },
      () => handleLocationError(true)
    );
  } else {
    handleLocationError(false);
  }

  if (!pos) tryAPIGeolocation();
};
