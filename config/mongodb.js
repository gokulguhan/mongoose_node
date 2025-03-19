const mongoose = require('mongoose');
const config = require("./config.json")
const configexample = require('./config.example.json')

const connectDB = async () => {
    try{ 
        await mongoose.connect(config.mongoose.url ?? configexample.mongoose.url,config.mongoose.option ?? configexample.mongoose.options);
console.log('MonGoDB Connected..');

    }catch(error){
        console.log("MonGoDB Not Connection");
        console.error(error.message)
        process.exit(1)
    }  
}


module.exports = connectDB


