const express = require("express")
const router = express.Router()

router.post("/register", async (req, res, next) => {})
router.post("/login", async (req, res, next) => {
  res.send("logged in")
})
router.delete("/refresh-token", async (req, res, next) => {})
router.post("/logout", async (req, res, next) => {})

module.exports = router
