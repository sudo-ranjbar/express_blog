const express = require("express");

const router = express.Router();

const postController = require("@controllers/admin/postsController")

router.get('/', postController.index)
router.get('/create', postController.create) // create page
router.post('/store', postController.store) // create action
router.get('/delete/:postID', postController.remove) // delete action
router.get('/edit/:postID', postController.edit) // edit page
router.post('/update/:postID', postController.update) // edit action

module.exports = router