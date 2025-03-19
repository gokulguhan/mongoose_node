const mongoose = require('mongoose');
const User = require('./user');
main().catch(err => console.log(err));



async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/testdb");
    
}

const user = new User({
    name: 'gokkKKKKkul',
    age:38,
    phone: 6374969419 
})
user.save().then(()=>{console.log("users saved")});
