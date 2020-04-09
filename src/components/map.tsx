import React, { ReactElement, useEffect, useRef, useState, useCallback } from 'react';

import balloonsIcon from '../img/icons/balloons.png';

const coords = { lat: 48.3, lng: 2.2 };
const destination = { lat: 47.75323, lng: 1.968723 };
const key = 'AIzaSyAvkWZOuEAPvels14QU3zB_cX3MYMTUsOM';

const infoWindow = new google.maps.InfoWindow();
const directionsService = new google.maps.DirectionsService();
const directionsRenderer = new google.maps.DirectionsRenderer();

const marker = new google.maps.Marker({
  position: destination,
  animation: google.maps.Animation.BOUNCE,
  icon: balloonsIcon,
});

const marker2 = new google.maps.Marker({
  position: destination,
  label: 'FoknoFolies',
});

const calculateRoute = origin => {
  const request: google.maps.DirectionsRequest = {
    origin,
    destination,
    travelMode: google.maps.TravelMode.DRIVING,
  };

  directionsService.route(request, (result, status) => {
    if (status === 'OK') {
      directionsRenderer.setDirections(result);
    }
  });
};

const Map = (): ReactElement => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>();
  const [pos, setPos] = useState<any>();

  const renderRoute = useCallback(() => {
    infoWindow.setPosition(pos);
    infoWindow.setContent('Position approximative');

    calculateRoute(pos);
  }, [pos]);

  const tryAPIGeolocation = () => {
    $.ajax({
      type: 'POST',
      url: `https://www.googleapis.com/geolocation/v1/geolocate?key=${key}`,
      success: location => {
        setPos({ lat: location.location.lat, lng: location.location.lng });
      },
    });
  };

  const handleLocationError = useCallback(
    browserHasGeolocation => {
      infoWindow.setPosition(map.getCenter());
      infoWindow.setContent(
        browserHasGeolocation
          ? "Votre service de géolocalisation n'est pas activé"
          : 'Votre navigateur ne supporte pas le service de géolocalisation.'
      );
    },
    [map]
  );

  useEffect(() => {
    if (mapRef?.current) {
      setMap(
        new google.maps.Map(mapRef.current, {
          zoom: 8,
          center: coords,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
        })
      );
    }
  }, []);

  useEffect(() => {
    if (map) {
      marker.setMap(map);
      marker2.setMap(map);
      directionsRenderer.setMap(map);

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            setPos({ lat: position.coords.latitude, lng: position.coords.longitude });
          },
          () => handleLocationError(true)
        );
      } else {
        handleLocationError(false);
      }
    }
  }, [map, handleLocationError]);

  useEffect(() => {
    if (pos) {
      renderRoute();
    } else {
      tryAPIGeolocation();
    }
  }, [pos, renderRoute]);

  return <div id="maps" ref={mapRef} />;
};

export default Map;
