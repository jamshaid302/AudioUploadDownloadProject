const express = require('express');
var app = express();
var bodyParser =require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


var imageAudio =require('./routes/uploadaudio');
app.use('/tracks',imageAudio);
// app.get('/',(req,res)=>{
//     res.send('API is Ready');
// });


app.listen(3000, () => {
    console.log("App listening on port 3000!");
});