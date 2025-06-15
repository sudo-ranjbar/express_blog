const express = require("express");

const router = express.Router();

const commentsController = require("@controllers/admin/commentsController")

router.get("/", commentsController.index) // show page
// router.get('/delete/:postID', commentsController.remove) // delete action
// router.get('/edit/:postID', commentsController.edit) // edit page
// router.post('/update/:postID', commentsController.update) // edit action

module.exports = router