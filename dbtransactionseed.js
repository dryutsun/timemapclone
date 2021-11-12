const db = require('./models')
const events = require('./models/event')
const entity = require('./models/entity')
const project = require('./models/project')
const user = require('./models/user')








// db.entity.create({
//     name: "Meowser",
//     description: "My lost beloved cat"
// })







// db.event.create({
//     title: "Spotted at Bossa Nova Civic Club",
//     date: 2021-11-12,
//     timeStart: 11:30,
//     locationLat: 40.69784,
//     locationLon: -73.92788,
//     association: "catwatch",
//     sourcedata: "Rachel",
//     comments: "She told me she saw Meowser at the club.",
//     entityId: 1,
// })
// .then(createdEvent => {
//     console.log(createdEvent)
// })

db.project.create({
    title: "Finding my Beloved Cat Meowser",
    description: "Charting where my baby cat is.",
    userId: 1
})


// 40.69784961115243, -73.92788127262908