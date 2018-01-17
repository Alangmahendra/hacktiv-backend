const mongoose = require('mongoose')
const Schema = mongoose.Schema

let commentSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  text: {
    type: String
  }
}, { timestamps: {} })

let commentModel = mongoose.model('Comment',commentSchema)

module.exports = commentModel