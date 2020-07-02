var mongoose = require("mongoose");
var countrySchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    changeName: String
});

var country = mongoose.model("Country",countrySchema,"country");
module.exports = country;