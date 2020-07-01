var Phim = require('../models/phim.model.js');

module.exports.index = function(req,res){
    Phim.find().then(function(movies){
        res.render('home/index',{phim:movies});
    });
};

module.exports.detail =async function(req, res){
    const id = req.params.id;
    var film = await Phim.find({_id:id});
    res.render('Film/detail',{film:film});
}