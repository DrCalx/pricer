const express = require('express')
const router = express.Router()
const priceHandler = require('../handlers/yahoo.handler')

router.get('/:symbol', (req, res) => {
  const symbol = req.params.symbol

  priceHandler.getPrice(symbol)
    .then(price => {
      res.send(price.toString())
    })
    .catch(reason => {
      res.status(500).send(reason)
    })
})

module.exports = router