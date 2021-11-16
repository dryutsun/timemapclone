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








// CREATE GET ROUTE. ASO GETTING PROJECT IDS FOR USER SELECTION.
router.get('/new', isLoggedIn, (req,res)=> {
    db.project.findAll({
        where: { userId: res.locals.currentUser.id}
    })
    .then((project) => {
        res.render('./events/new.ejs', {project:project})
    })
    .catch((error) => {
        console.error
        res.status(400).send("404")
    })
})
// CREATE NEW POST ROUTE.
router.post('/new', isLoggedIn, (req,res)=>{
    db.event.create({
        title: req.body.title,
        date: req.body.date,
        timeStart: req.body.timeStart,
        locationLat: req.body.locationLat,
        locationLon: req.body.locationLon,
        association: req.body.association,
        sourcedata: req.body.sourcedata,
        comments: req.body.comments,
        userId: res.locals.currentUser.id,
        projectId: req.body.projectId
    })
    .then((events)=>{
    res.render('./projects/index.ejs')
    })
})

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
// When we put method override (put) its going to look for router.put (same with delete)
router.put('/edit/:id', isLoggedIn,(req,res) => {
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

router.delete('/:id', isLoggedIn, (req,res)=> {
    db.event.destroy({
        where: {id: req.params.id}
    })
    .then((deletedEvent) => {
        console.log("You removed", deletedEvent)
        res.redirect('/projects')
    })
    .catch(error=>{
        console.error
    })
})



module.exports = router;