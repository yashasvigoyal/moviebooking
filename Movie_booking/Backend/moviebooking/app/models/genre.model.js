const mongoose = require('mongoose');
const genreSchema = new mongoose.Schema({
    genreid : {
        type: Number
    },
    genre:{
        type:String
    } 
      },
      { timestamps: true }
)
module.exports = mongoose.model("Genre",genreSchema);