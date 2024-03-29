const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

const router = express.Router()

const cors = {
  'Access-Control-Allow-Origin': 'http://localhost:8080',
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
}

router.get('/more/server2', (req, res) => {
  res.set(cors)
  console.log(Object.keys(req.cookies))
  res.json(req.cookies)
})

router.post('/more/server2', (req, res) => {
  res.set(cors)
  console.log(Object.keys(req.cookies))
  res.json(req.cookies)
})

router.options('/more/server2', (req, res) => {
  res.set(cors)
  res.end()
})

app.use(router)

const port = 8088
module.exports = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})
