var express = require('express');

//this express use 
const app = express();
// this server port number
const port = 4090
const router = require('./routes/routes.js')
const connectDB = require('./config/mongodb.js')



// data understanding middleware any api check data understanding
app.use(express.json( ))
app.use(express.urlencoded({extended:true}))

// connect MongoDB
connectDB()


// this call route to all fun
app.use('/movie',router)

/// this check direct api 
app.get('/', (eq,res) => {
    res.json({msg:"hai main.js mongoose"})
});


// this server listen port number
app.listen(port, ()=>{
    console.log(`server started http://localhost:${port}`)
});
