const mongoose = require('../database/database')

module.exports = mongoose.model(
  'post', 
  new mongoose.Schema(
    {
      title:  String,
      author: String,
      body:   String,
      comments: [{ body: String, date: Date }],
      hidden: Boolean,
      status: String,
      meta: {
        votes: Number,
        favs:  Number
      }
    },
  { timestamps: true}
  )
)