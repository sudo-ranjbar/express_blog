const express = require("express");
const router = express.Router();

// routers
const postsRouter = require("./postsRouter")
const dashboardRouter = require("./dashboardRouter")
const commentsRouter = require("./commentsRouter")

router.use("/dashboard", dashboardRouter)
router.use("/posts", postsRouter)
router.use("/comments", commentsRouter)

module.exports = router