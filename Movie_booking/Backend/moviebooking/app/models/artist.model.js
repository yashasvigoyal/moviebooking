const mongoose = require('mongoose');
const artistSchema = new mongoose.Schema({
    artistid : {
        type: Number
    },
    first_name: {
        type:String
    },
    last_name: {
        type:String
    },
    wiki_url : { 
        type: String, 
        default: 'https://www.mongodb.com/mern-stack' 
    },
    profile_url : { 
        type: String, 
        default: 'https://ik.imagekit.io/upgrad1/marketing-platform-assets/meta-images/home.jpg' 
    },
    movies : {
        type: Array
    }
          },
          { timestamps: true }
        )
module.exports = mongoose.model("Artist",artistSchema);