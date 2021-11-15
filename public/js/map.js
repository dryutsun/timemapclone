mapboxgl.accessToken = 'pk.eyJ1IjoiZHJ5dXRzdW4iLCJhIjoiY2t2emRyMXlsMTNzMjJ3cWlzajV5YnprbiJ9.t1evn_v1EZUy8Gn-E0fqcQ'

const map = new mapboxgl.Map({ 
container: 'map', 
style: 'mapbox://styles/mapbox/streets-v11', 
center: [0,0], // mapbox uses long/lat order 
zoom: 9 
})




map.addControl(new mapboxgl.NavigationControl());
map.addControl(
  new mapboxgl.GeolocateControl({
  positionOptions: {
  enableHighAccuracy: true
  },
  // When active the map will receive updates to the device's location as it changes.
  trackUserLocation: true,
  // Draw an arrow next to the location dot to indicate which direction the device is heading.
  showUserHeading: true
  })
  );


events.forEach((eventData) => {
  const marker = new mapboxgl.Marker()
  .setLngLat([eventData.locationLon, eventData.locationLat])
  .setPopup(
    new mapboxgl.Popup({ offset: 25 })
      .setLngLat([eventData.locationLon, eventData.locationLat])
      .setHTML(`<h5>${eventData.title}</h5><p>${eventData.comments}</p>`)
      .setMaxWidth("300px")
      .addTo(map)
  )
  .addTo(map);
})
