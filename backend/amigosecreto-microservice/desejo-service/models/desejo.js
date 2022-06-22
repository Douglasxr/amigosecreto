const mongoose = require ('mongoose');

const desejoSchema = new mongoose.Schema ({
    nome : String,
    desejo1 : String,
    desejo2 : String,
    desejo3 : String,
});

module.exports = mongoose.model('Desejo',desejoSchema);