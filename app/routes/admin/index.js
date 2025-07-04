const express = require("express");
const router = express.Router();

// routers
const dashboardRouter = require("./dashboardRouter")
const postsRouter = require("./postsRouter")
const commentsRouter = require("./commentsRouter")

router.use("/dashboard", dashboardRouter)
router.use("/posts", postsRouter)
router.use("/comments", commentsRouter)

module.exports = router