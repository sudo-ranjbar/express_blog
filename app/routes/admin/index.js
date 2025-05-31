const express = require("express");
const router = express.Router();

// routers
const postsRouter = require("./postsRouter")
const dashboardRouter = require("./dashboardRouter")

router.use("/dashboard", dashboardRouter)
router.use("/posts", postsRouter)

module.exports = router