const express = require('express')
const router = express.Router()
const db = require('../models')
const passport = require('../config/ppConfig.js')
const isLoggedIn = require('../middleware/isLoggedIn')
const project = require('../models/project')
const user = require('../models/user')
const mapToken = process.env.MAPBOX_TOKEN
const event = require('../models/event')




router.get('/', isLoggedIn, (req,res) => {
    db.project.findAll({
        where: { userId: res.locals.currentUser.id}
    })
    .then((project) => {
            if (!project) throw Error()
            res.render('./profile/profile.ejs', {project: project})
    })
    .catch((error) => {
            console.error
            res.status(400).send("404")
    })
})


// Individual View
// ! This displays individual projects, but should display all events associated with that project.


router.get('/projects/:id', isLoggedIn, (req,res) => {
    db.project.findOne({
        where: {
            id: req.params.id
        },
        include: [db.event, db.user] // Does it have the foreign key for project somewhere in the model
    })
    .then((project) => {
        // console.log(project.events)
        res.render('./profile/showProject.ejs', {project: project})
    })
    .catch((error) => {
        console.log(error)
        res.status(400).send("404")
    })
})

router.get('/project')


// ! NEED TO PASS ALL EVENTS TO INDEX VIEW, WHICH I DID NOT DO?


// [ ] - Figure out how to attach entities to the "projects" view, i.e. via joining, or just biting the bullet and giving entity a 

// INCLUDE

// SELECT *
// FROM project
// JOIN event.project_id ON project.id
// JOIN 
// JOIN user.project_id ON project.id
// WHERE id = ?




module.exports = router