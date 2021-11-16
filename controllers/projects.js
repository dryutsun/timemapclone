const express = require('express')
const router = express.Router()
const db = require('../models')
const passport = require('../config/ppConfig.js')
const isLoggedIn = require('../middleware/isLoggedIn')
const project = require('../models/project')
const user = require('../models/user')
const mapToken = process.env.MAPBOX_TOKEN
const event = require('../models/event')


// PROJECTS DISPLAY

// This should display all projects.

router.get('/', isLoggedIn, (req,res) => {
    db.project.findAll({
        where: { userId: res.locals.currentUser.id}
    })
    .then((project) => {
            if (!project) throw Error()
            res.render('./projects/index.ejs', {project: project})
    })
    .catch((error) => {
            console.error
            res.status(400).send("404")
    })
})


// GET ROUTE FOR CREATING NEW PROJECT
router.get('/new', isLoggedIn, (req,res) => {
    res.render('./projects/new.ejs')
})

// CREATE ROUTE FOR CREATING NEW PROJECT
router.post('/new', isLoggedIn, (req,res) =>{
    db.project.create({
        title: req.body.title,
        description: req.body.description,
        userId: res.locals.currentUser.id
    })
    .then((project)=>{
        console.log(project)
    res.redirect('/projects')
    })
    .catch((error) => {
        console.error
        res.status(400).send("404")
})
})

// Individual View
// ! This displays individual projects, but should display all events associated with that project.
router.get('/:id', isLoggedIn, (req,res) => {
    db.project.findOne({ // Find One Project that meets this criteria
        where: { id: req.params.id },
        include: [db.event, db.user] // Does it have the foreign key for project somewhere in the model
    })
    .then((project) => {
        console.log("Success!")
        console.log(project.event)
        // console.log(project.events)
        res.render('./projects/show.ejs', {project: project})
    })
    .catch((error) => {
        console.log(error)
        res.status(400).send("404")
    })

})


// Individual Project Editing Routes
router.get('/edit/:id', isLoggedIn, (req,res) => {
    db.project.findOne({
        where: {id: req.params.id},
    })
    .then((project)=>{
        console.log(project)
        res.render('./projects/edit.ejs', {project:project})
    })
})

router.put('/edit/:id', isLoggedIn, (req,res) => {
    db.project.findOne({
        where: {id: req.params.id},
    })
    .then((project) => {
        project.update({
            title: req.body.title,
            description: req.body.description,
            userId: res.locals.currentUser.id
        })
    })
    res.redirect('/projects')
})

// Individual Project Delete Routes
router.delete('/:id', isLoggedIn, (req,res)=> {
        db.project.destroy({
            where: {id: req.params.id}
        })
        .then((deletedProject) => {
            console.log("You removed", deletedProject)
            res.redirect('/projects')
        })
        .catch(error=>{
            console.error
        })
    })




module.exports = router;