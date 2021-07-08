const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/', async (req, res) => {
  try{
    const posts = await Post.find()
    res.status(200).json(posts)
  }catch(err){
    console.log(err)
    res.status(500).json({err})
  }
})

module.exports = router