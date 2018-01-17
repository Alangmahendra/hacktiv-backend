const Model = require('../models/post')

class Post {
  static findAll(req, res) {
    Model.find({}).populate('creator').populate('comments.creator').exec((err, rows) => {
      if (err) {
        res.status(500).json({
          message: err
        })
      } else {
        res.status(200).json({ message: 'all post', data: rows })
      }
    })
  }


  static findOne(req, res) {
    Model.findById(req.params.id, (err, rows) => {
      if (err) {
        res.status(500).json({ message: err })
      } else {
        res.status(200).json({ message: 'data find', data: rows })
      }
    })
  }


  static addPost(req, res) {
    let obj = {
      ask: req.body.ask,
      creator: req.user._id
    }
    Model.create(obj, (err, rows) => {
      if (err) {
        res.status(500).json({ message: err })
      } else {
        res.status(200).json({ message: 'your question has added', data: rows })
      }
    })
  }

  static addComment(req, res) {
    let obj = {
      creator: req.user._id,
      text: req.body.text
    }
    Model.findByIdAndUpdate({ _id: req.params.id }, {
      $push: {
        comments: obj
      }
    }, { new: true }).populate('creator').populate('comments.creator').exec((err, rows) => {
      if (err) {
        res.status(500).json({ message: err })
      } else {
        Model.find({}).populate('creator').populate('comments.cretor').exec((err, rows) => {
          if (err) {
            res.status(500).json({
              message: err
            })
          } else {
            res.status(200).json({ message: 'ngomen', data: rows })
          }
        })
      }
    })
  }



  static addSingleComment(req, res) {
    let obj = {
      creator: req.user._id,
      text: req.body.text
    }
    Model.findByIdAndUpdate({ _id: req.params.id }, {
      $push: {
        comments: obj
      }
    }, { new: true }).populate('creator').populate('comments.creator').exec((err, rows) => {
      if (err) {
        res.status(500).json({ message: err })
      } else {
        Model.findById(re.params.id).populate('creator').populate('comments.cretor').exec((err, rows) => {
          if (err) {
            res.status(500).json({
              message: err
            })
          } else {
            res.status(200).json({ message: 'ngomen', data: rows })
          }
        })
      }
    })
  }


  
  static findAllMypost(req,res){
    Model.find({creator : req.user._id}).populate('comments.creator').exec((err,rows)=>{
      if(err){
        res.status(500).json({message : err})
      } else {
        res.status(200).json({message : 'all of your post',data : rows})
      }
    })
  }
  
}

module.exports = Post