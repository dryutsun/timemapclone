mapboxgl.accessToken = 'pk.eyJ1IjoiZHJ5dXRzdW4iLCJhIjoiY2t2emRyMXlsMTNzMjJ3cWlzajV5YnprbiJ9.t1evn_v1EZUy8Gn-E0fqcQ'

const lat = document.querySelector("#locationLat")
const lon = document.querySelector("#locationLon")
console.log(lat, lon)

const map = new mapboxgl.Map({ 
container: 'map', 
style: 'mapbox://styles/mapbox/streets-v11', 
center: [lat.value,lon.value], // mapbox uses long/lat order 
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



// Find a way to destructure the lngLat and pass it to the "input parameter of long and lat"
map.on('click', (e) => {
    console.log(`A click event has occurred at ${e.lngLat}`);
    console.log(e.lngLat)
    lat.value = e.lngLat.lat
    lon.value = e.lngLat.lng
  });

