var mongoose = require("mongoose");
var categorySchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    changeName: String
});

var category = mongoose.model("Category",categorySchema,"category");
module.exports = category;