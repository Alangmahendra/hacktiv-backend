const express = require('express')
const router = express.Router()
const Post = require('../controller/post')
const auth = require('../auth/auth')

router.get('/',Post.findAll)
router.post('/',auth.isLogin,Post.addPost)
router.get('/myquestion',auth.isLogin,Post.findAllMypost)
router.get('/:id',Post.findOne)
router.put('/detailquestion/:id',auth.isLogin,Post.addSingleComment)
router.put('/:id',auth.isLogin,Post.addComment)

module.exports = router