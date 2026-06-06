import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
  autore: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  testo: {
    type: String,
    required: true
  },
  immagine: {
    type: String,
    default: ''
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, { timestamps: true })

const Post = mongoose.model('Post', postSchema)

export default Post