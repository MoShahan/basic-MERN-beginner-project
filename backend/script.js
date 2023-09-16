const express = require("express")
const app = express()
// const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require("morgan")
const createError = require("http-errors")
require("dotenv").config()
const AuthRoute = require("./Routes/Auth.route")

const USERS = [
  { id: 1, name: "Flash", email: "flash@dc.com", password: "flash123" },
  { id: 2, name: "Superman", email: "superman@dc.com", password: "superman123" },
  { id: 3, name: "Batman", email: "batman@dc.com", password: "batman123" },
  { id: 4, name: "Shahan", email: "shahan@me.com", password: "shahan123" },
]

const ALL_USERS = [...USERS]

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

// app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: true }))

app.use("/auth", AuthRoute)

app.get("/users", (req, res) => {
  res.json({ users: ALL_USERS.map(user => ({ email: user.email, name: user.name })) })
  return
})

app.post("/login", (req, res) => {
  ALL_USERS.forEach(user => {
    if (user.email === req.body.email && user.password === req.body.password) {
      res.status(200).send({ done: "LOGIN SUCCESS" })
      return
    }
  })
  res.status(400).send({ error: "LOGIN FAILED" })
  return
})

app.post("/register", (req, res) => {
  if (req.body.password !== req.body.confirmPassword) {
    res.status(400).send({ error: "Passwords don't match" })
    return
  }
  ALL_USERS.forEach(user => {
    if (user.email === req.body.email) {
      res.status(400).send({ error: "User already present" })
      return
    }
  })
  ALL_USERS.push({ name: req.body.name, password: req.body.password, email: req.body.email, id: ALL_USERS.length + 1 })
  res.status(201).send({ done: "User registered succesfully" })
  return
})

// to catch all other routes
app.use(async (req, res, next) => {
  // const error = new Error("url not found")
  // error.status = 404
  // next(error) // this code makes it enter the next app.use()
  // whenever you give an error object as a parameter to next function, it will execute the app.use() having first argument as err

  next(createError.NotFound("this path not found"))
})

// error handler
app.use(async (err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    error: { status: err.status || 500, message: err.message },
  })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening from ${PORT}...`)
})
