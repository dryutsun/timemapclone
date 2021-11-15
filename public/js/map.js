mapboxgl.accessToken = 'pk.eyJ1IjoiZHJ5dXRzdW4iLCJhIjoiY2t2emRyMXlsMTNzMjJ3cWlzajV5YnprbiJ9.t1evn_v1EZUy8Gn-E0fqcQ'

const map = new mapboxgl.Map({ 
container: 'map', 
style: 'mapbox://styles/mapbox/streets-v11', 
center: [0,0], // mapbox uses long/lat order 
zoom: 9 
})




map.addControl(new mapboxgl.NavigationControl());



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
