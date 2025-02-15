const express = require("express")
const app = express()
const routes = require('./App/routes')

app.use(routes)

app.listen(3000, () => console.log('http://localhost:3000 is running🔥'))