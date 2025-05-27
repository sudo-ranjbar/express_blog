const express = require("express");

const router = express.Router();

const postController = require("../../controllers/admin/postsController")

router.get("/", postController.index)
router.get("/create", postController.create)
router.post('/store', postController.store)

module.exports = router