import express from 'express';

//this express use 
const app = express();
// this server port number
const port = 4090

app.get('/', (req,res) => {
    res.json({msg:"hai mongoose"})
});

// this server listen port number
app.listen(port, ()=>{
    console.log(`server started http://localhost:${port}`)
})