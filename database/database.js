const mongoose = require('mongoose')

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
    console.log(`connection error: ${err}`)
  }
)
.then(
  () => {
    console.log('Database connected.')
  }
)

module.exports = mongoose
