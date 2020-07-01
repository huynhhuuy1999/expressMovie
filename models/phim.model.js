var mongoose = require("mongoose");

var phimSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  nameEnglish: String,
  country: String,
  year: String,
  episodes: String,
  status: String,
  quality: String,
  resolution: String,
  category: String,
  image: String,
  director: String,
  actor: String,
  time: String
});

var phim = mongoose.model("Phim", phimSchema, "phim");
module.exports = phim;
