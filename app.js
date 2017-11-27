const express = require('express')
const app = express()

const priceRouter = require('./src/routers/price.router')

app.get('/price', priceRouter)

app.listen(3000, () => console.log('Listening on 3000'))