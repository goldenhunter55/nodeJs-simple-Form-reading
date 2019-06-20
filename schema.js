const mongoose = require('mongoose');
const schema = mongoose.Schema;

const dataSchema = new schema({
    name : String ,
    age : Number,
    Gender: String
});

const data = mongoose.model('data',dataSchema,"data");
module.exports=data;