const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

describe('Pricer App', () => {
  describe('/price', () => {
    it('returns 42 when I supply an id', () => {
      const id = 'TSLA'
      chai
    })
  })
})