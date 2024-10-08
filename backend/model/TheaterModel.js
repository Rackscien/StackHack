const mongoose=require('mongoose')

const TheaterSchema =  new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    ticketPrice:{
        type: String,
        required: true,
    },
    seats:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('theater',TheaterSchema);