const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPost');


router.post('/addpost', async(req, res) =>{
  try {
    const userEntry = {};
    userEntry.title = req.body.title;
    userEntry.body = req.body.body;
    // console.log(userEntry, 'userEntry');

    const createPost = await BlogPost.create(userEntry);
    console.log(createPost, '<-- post created')

    res.json({
      status: 200,
      data: createPost
    })

  } catch (err) {
    res.json({
      status: 400,
      data: err
    })
  }
})

router.get('/posts', async(req, res) =>{
  try {
    const allPosts = await BlogPost.find().sort({date: -1});
    allPosts
    console.log(allPosts, '<--- All posts')

    res.json({
      status: 200,
      data: allPosts
    })
  } catch (err) {
    res.json({
      status: 400,
      data: err.message
    })
  }
})

router.put('/update/:id', async(req, res) =>{
  try {
    const post = {
      title: req.body.title,
      body: req.body.body
    }
    const id = req.params.id;

  } catch (err) {
    res.json({
      status: 400,
      data: err.message
    })
  }
})

router.delete('/:id', async(req, res) =>{
  try {
    const deletePost = await BlogPost.findByIdAndRemove(req.params.id);
    console.log(deletePost, '<--- the delete post')
    res.json({
      status: 200,
      data: deletePost,
      msg: 'Post got deleted'
    })

  } catch (err) {
    res.json({
      status: 400,
      data: err.message
    })
  }

})

module.exports = router;
