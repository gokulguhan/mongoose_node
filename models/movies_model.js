const { default: mongoose } = require("mongoose");

const { Schema } = mongoose

// write the schema
let moviesSchema = new Schema({

    title: {
        // this set input method
        type: String,
        unique: true,
        required: true
    },
    desc: String,
    year: {
        type: Number,
        required: true
    }
});



// create model
let Movie = mongoose.model('Movie', moviesSchema)

// this export to other page
module.exports = Movie;