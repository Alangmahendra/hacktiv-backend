import { request } from 'http';

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Comment = require('./comment')

let postsSchema = new Schema({
  creator: {
    type: String,
    ref: 'User'
  },
  ask: {
    type: String,
    required: true
  },
  comments: [
    Comment.schema
  ]

}, { timestamps: {} })

let PostModel = mongoose.model('Post',postsSchema)
module.exports = PostModel