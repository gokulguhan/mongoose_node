var express = require('express');

//this express use 
const app = express();
// this server port number
const port = 4090
const router = require('./routes/routes.js')
const connectDB = require('./config/mongodb.js')


// connect DB
connectDB()


// this call route to all fun
app.use('/mdb',router)


app.get('/', (eq,res) => {
    res.json({msg:"hai main.js mongoose"})
});


// this server listen port number

app.listen(port, ()=>{
    console.log(`server started http://localhost:${port}`)
});

// module.exports = app;