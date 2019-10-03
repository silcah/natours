/* eslint-disable */

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiaGNzaWwiLCJhIjoiY2sxNXV5c3hhMDZkcDNubzhxZnRuejM3ZiJ9.C0LzzPka2H8qM_3VectFtQ';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/hcsil/ck15v75w90a4u1ctb5dzcrlh0',
    scrollZoom: false
    //center: [-118.113491, 34.111745],
    //zoom: 3
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p> Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
