var mongoose = require("mongoose");

var phimSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  nameEnglish: String,
  country: [{
    name:String
  }],
  year: String,
  episodes: String,
  status: String,
  quality: String,
  resolution: String,
  category: [{
    name:String
  }],
  image: String,
  director: String,
  actor: [{
    name:String
  }],
  time: String,
  date:{type:Date, default:Date.now},
  votes:{
    star:{type:Number,default:0},
    amount: {type:Number,default:0}
  },
  view:{
    viewAll:{type:Number,default:0},
    viewWeek:{type:Number,default:0}
  }
});

var phim = mongoose.model("Phim", phimSchema, "phim");
module.exports = phim;
