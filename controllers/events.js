const express = require('express')
const router = express.Router()
const db = require('../models')
const passport = require('../config/ppConfig.js')
const isLoggedIn = require('../middleware/isLoggedIn')
const project = require('../models/project')
const user = require('../models/user')
const mapToken = process.env.MAPBOX_TOKEN
const event = require('../models/event')

// EVENTS DISPLAY


// INDIVIDUAL EVENT EDIT ROUTE
router.get('/edit/:id', isLoggedIn, (req,res) => {
    db.event.findOne({
        where: {id: req.params.id},
    })
    .then((event) => {
        console.log(event)
        res.render('./events/edit.ejs', {event: event})
    })
})

// INDIVIDUAL EVENT UPDATE ROUTE
router.post('/edit/:id', isLoggedIn,(req,res) => {
    db.event.findOne({
        where: {id: req.params.id,
    }})

    .then((event) => {
        event.update({
            title: req.body.title,
            date: req.body.date,
            timeStart: req.body.timeStart,
            locationLat: req.body.locationLat,
            locationLon: req.body.locationLon,
            association: req.body.association,
            sourcedata: req.body.sourcedata,
            comments: req.body.comments
        })
        res.redirect(`/projects/${event.projectId}`)
    })
})




module.exports = router;