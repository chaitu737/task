const mongoose = require('mongoose')

const Schema = mongoose.Schema

let noteSchema = new Schema({

    noteId: { type: String, unique: true, required: true },
    title: { type: String, default: '' },

    
    post: { type: String, default: '' },
    color:{type:String,field:'color'},
    labels:{type:String,default:''},
    image:{
        type:String
    }
    
})

module.exports =mongoose.model('Note', noteSchema)