const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/LoginMongo')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(() => {
    console.log("Failed to connect to MongoDB");
})

const loginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const collection = new mongoose.model("collection1", loginSchema);
module.exports = collection;