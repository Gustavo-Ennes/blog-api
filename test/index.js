const chai = require('chai')
const chaiHTTP = require('chai-http')
const app = require('../app.js')
var expect = chai.expect

chai.use(chaiHTTP)

describe('Database connection', function() {

  it("connection test", (done) => {

    const mongoose = require('mongoose')
    let status = 'idle'

    require('dotenv').config()

    mongoose.connect(
      `mongodb+srv://kratos:${process.env.DB_PASS}@cluster0.fhhom.mongodb.net/blog?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true, 
        useUnifiedTopology: true
      }
    )
    .catch(
      (err) => {
        console.log(`test error: ${err}`)
        status = 'error'
        done(err)
      }
    )
    .then(
      () => {
        status = status === 'idle' ? 'connected' : status
        expect(status).to.equal('connected')
        done()
      }
    )
  })
});

describe('Retrieve posts', () => {
  it('checking posts', (done) => {
    chai.request(app)
    .get('/')
    .end((err, res) => {
      if(err){console.log(err)}
      expect(res.body).to.be.an('array')
      expect(res).to.have.status(200)
      done()
    })
  });
});