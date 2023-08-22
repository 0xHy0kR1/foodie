const mongoose = require('mongoose')

const {Schema} = mongoose;

// Defining a schema for user details
const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }

  });

module.exports = mongoose.model('user', UserSchema); // This line help us to create collection with the name of "user" and feed the schema(named UserSchema)
