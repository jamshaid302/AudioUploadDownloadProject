var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
    name: String,
    track: String
});

//Image is a model which has a schema imageSchema

module.exports = new mongoose.model('uploadAudio', imageSchema);