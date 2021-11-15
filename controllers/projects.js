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

router.get('/:id/event/:eventid'), isLoggedIn, (req,res) => {
    db.event.findOne({ // Find One Event Where PrjectID is the :id and  Eventis id:
        where: {
            projectId: req.params.id,
            id: req.params.eventid
        },
        include: [db.project, db.user]
    })
}





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