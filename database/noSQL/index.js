const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/imageData', {
    useMongoClient: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {console.log('Successful connection to database!')});

var schema = new mongoose.Schema({
    uniqueId:[
        {
        image:{
            url: String,
            verification: Boolean,
            description: String
            }
        }
    ]
})
var imageList = mongoose.model('imageLists', schema)
 module.exports = imageList;
