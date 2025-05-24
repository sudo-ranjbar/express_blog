const express = require("express");

const router = express.Router();

const postController = require("../../controllers/admin/postsController")

router.get("/", postController.index)

module.exports = router