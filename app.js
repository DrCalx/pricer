const express = require('express')
const app = express()

const priceRouter = require('./src/routers/price.router')

app.use('/price', priceRouter)

app.listen(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`))