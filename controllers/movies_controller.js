
const Movie = require("../models/movies_model");


module.exports = {

  // this  fetch data api
    moviesGet:async (req, res) =>{ 
      try{
        /// this get data qurey for only desc sk
        const movies = await Movie.find({desc:"sk"})
        return res.status(200).json({status:1,message:"data fetch sucessfully",data:movies})
      }catch(error){
        return res.status(400).json({status:0,message:error.message})
      }
    },

    // this insert data api 
    moviesInsert : async (req,res)=>{
          // validate your data
     const Newmovie = new movie({
            title:req.body.title,
            desc:req.body.desc,
            year:req.body.year
        })
      // save to your data
      try {
        await Newmovie.save()
        return res.status(201).json({status:1,msg:'data insert Successfully',data:Newmovie})
      }catch(error){
        return res.status(400).json({message:error.message})

        
      }
    },


    moviesUpdate: (req,res)=>{
        res.json({msg:"hello updateMovies mongoose"})
    },
    moviesdel: (req,res)=>{
        res.json({msg:"hello delmove mongoose"})
    }
  };
  