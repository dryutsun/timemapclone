const db = require('./models')
const events = require('./models/event')
const entity = require('./models/entity')
const project = require('./models/project')
const user = require('./models/user')

db.project.create({
    title: "Finding my Beloved Cat Meowser",
    description: "Charting where my baby cat is.",
    userId: 1
})

db.event.create({
    id: 3,
    title: "Spotted at BAM Fim Fest",
    date: 2021-11-14,
    timeStart: '14:30',
    locationLat: 40.68648788680625,
    locationLon: -73.9776959403694,
    association: "catwatch",
    sourcedata: "Bam Employee Phone Call",
    comments: "One of the Film Ticketing people mentioned they saw my cat at BAM Film Fest",
    entityId: 1,
    projectId: 1,
})

.then(createdEvent => {
    console.log(createdEvent)
})



