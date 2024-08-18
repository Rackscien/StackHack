const mongoose=require('mongoose')

const MovieSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        // unique: true,
    },
    image:{
        type: String,
        required: true,
    },
    language:{
        type: String,
        required: true,
    },
    genre:{
        type: String,
        required: true,
    },
    director:{
        type: String,
        required: true,
    },
    trailer:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    duration:{
        type: String,
        required: true,
    },
    start_date:{
        type: String,
        required: true,
    },
    end_date:{
        type: String,
        required: true,
    },
    type:{    //currently playing or comming soon
        type: String,
        required: true,
    }
});
module.exports = mongoose.model('movies',MovieSchema);