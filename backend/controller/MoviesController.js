const movies = require('../model/MoviesModel')

module.exports.getAllMovies = async (req,res)=>{
    const movie= await movies.find();
    res.send(movie);
}

module.exports.addMovie = async (req,res)=>{
    const {title,image,language,genre,director,trailer,description,duration,start_date,end_date,type} = req.body;
    movies.create({title,image,language,genre,director,trailer,description,duration,start_date,end_date,type})
    .then((data)=>{
        console.log('Added Successfully');
        console.log(data);
        res.send(data);
    })
}

module.exports.getByType = async(req,res)=>{
    const {type}=req.body;
    const movie= await movies.find({type})
    res.send(movie);
}

module.exports.deleteMovie= async(req,res)=>{
    const {_id}=req.body;
    movies.findByIdAndDelete({_id})
    .then(()=>{
        res.send('Deleted Successfully..');
    })
    .catch((err)=>{console.log(err)})
}

module.exports.updateMovie= async(req,res)=>{
    const {_id,title,image,language,genre,director,trailer,description,duration,start_date,end_date,type}=req.body;
    movies
    .findByIdAndUpdate(_id, {title,image,language,genre,director,trailer,description,duration,start_date,end_date,type})
    .then(()=> res.send("Updated Successfully...."))
    .catch((err)=> console.log(err))
}