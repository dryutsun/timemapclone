mapboxgl.accessToken = 'pk.eyJ1IjoiZHJ5dXRzdW4iLCJhIjoiY2t2emRyMXlsMTNzMjJ3cWlzajV5YnprbiJ9.t1evn_v1EZUy8Gn-E0fqcQ'

const map = new mapboxgl.Map({ 
container: 'map', 
style: 'mapbox://styles/mapbox/streets-v11', 
center: [0,0], // mapbox uses long/lat order 
zoom: 9 
})





events.forEach((eventData) => {
  map.addControl(new mapboxgl.NavigationControl());
const marker = new mapboxgl.Marker()
console.log(eventData.location)
.setLngLat([eventData.locationLon, eventData.locationLat])
.setPopup(
  new mapboxgl.Popup({ offset: 25 })
    .setLngLat([eventData.locationLon, eventData.locationLat])
    // .setHTML(`<h5>${campground.name}</h5><p>${campground.location}</p>`)
    .setMaxWidth("300px")
    .addTo(map)
)
.addTo(map);
})
// const marker = new mapboxgl.Marker()
//   .setLngLat([events[0].locationLon, events[0].locationLat])
//   .setPopup(
//     new mapboxgl.Popup({ offset: 25 })
//       .setLngLat([events[0].locationLon, events[0].locationLat])
//       // .setHTML(`<h5>${campground.name}</h5><p>${campground.location}</p>`)
//       .setMaxWidth("300px")
//       .addTo(map)
//   )
//   .addTo(map);

//   const marker2 = new mapboxgl.Marker()
//   .setLngLat([-73.90773991057183,40.69783872605088])
//   .setPopup(
//     new mapboxgl.Popup({ offset: 25 })
//       .setLngLat([-73.92773991057183,40.69783872605088])
//       // .setHTML(`<h5>${campground.name}</h5><p>${campground.location}</p>`)
//       .setMaxWidth("300px")
//       .addTo(map)
//   )
//   .addTo(map);

// Should I handle all the data infomration for display here? 