const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    createdAt:{
        type: Date,
        default: ()=>Date.now()
    },
    pid: { type: String},
    file1: { type: String},
    file2: { type: String},
    status: { type: String},
    

},
{ timestaps: true })

const data = mongoose.model('Data', dataSchema)
module.exports = data
