var mongoose=require("mongoose");

mongoose.connect('mongodb://localhost:27017/trackDB')

module.exports={
    "uploadAudio":require("../Models/uploadaudio")
}