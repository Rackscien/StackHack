const theater= require('../model/TheaterModel')

module.exports.getAllTheater= async(req,res)=>{
    const Theater= await theater.find();
    res.send(Theater);
}

module.exports.addTheater= async(req,res)=>{
    const {name,city,ticketPrice,seats,image}=req.body;
    theater
    .create({name,city,ticketPrice,seats,image})
    .then((data)=>{
        console.log('Added successfully..')
        res.send(data);
    })
}
module.exports.deleteTheater= async(req,res)=>{
    const {_id}=req.body;
    theater.findByIdAndDelete({_id})
    .then(()=>{res.send('deleted successfully')})
    .catch((err)=>{console.log(err)});
}

module.exports.getTheaterByCity = async(req,res)=>{
    const {city}= req.body;
    const Theater= await theater.find({city});
    res.send(Theater);
}
module.exports.updateTheater = async (req,res)=>{
    const {_id,name,city,ticketPrice,seats,image}=req.body;
    
    theater.findByIdAndUpdate(_id,{name,city,ticketPrice,seats,image})
    .then(()=> res.send("Updated Successfully...."))
    .catch((err)=> console.log(err))
}