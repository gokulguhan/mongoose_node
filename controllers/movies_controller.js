

module.exports = {
    moviesGet: (req, res) =>{ res.json({msg:'Hello'})},

    moviesInsert :(req,res)=>{
        res.json({msg:"hello insertMovies mongoose"})
    },
    moviesUpdate: (req,res)=>{
        res.json({msg:"hello updateMovies mongoose"})
    },
    moviesdel: (req,res)=>{
        res.json({msg:"hello delmove mongoose"})
    }
  };
  