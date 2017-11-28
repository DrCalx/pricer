const yahooFinance = require('yahoo-finance')

module.exports = {
  getPrice: (symbol) => {
    return new Promise((resolve, reject) => {
      yahooFinance.quote({ symbol: symbol })
        .then(result => resolve(result.price.regularMarketPrice))
        .catch(reason => reject(reason))
    })
  }
}