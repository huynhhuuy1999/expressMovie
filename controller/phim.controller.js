var Phim = require('../models/phim.model.js');
var Category = require('../models/category.model.js');
var Country = require('../models/country.model.js');
const phim = require('../models/phim.model.js');

module.exports.index = async function(req,res){
    let movies = await Phim.find().sort({date:'desc'});
    let newOddFilm = await Phim.find({category:{$elemMatch:{name:"Phim lẻ"}}}).limit(10).sort({date:'desc'});
    let trailer = await Phim.find({status:"Trailer"}).sort({date:'desc'});
    let newUpdateOddFilm = await Phim.find({category:{$elemMatch:{name:"Phim lẻ"}},status:"Hoàn thành"}).limit(8).sort({date:'desc'});
    let newUpdateSeriesFilm = await Phim.find({category:{$elemMatch:{name:"Phim bộ"}},status:"Đang phát hành"}).limit(8).sort({date:'desc'});
    let hotOddFilmWeek = await Phim.find({category:{$elemMatch:{name:"Phim lẻ"}},status:"Hoàn thành"}).limit(15).sort({'vote.star':'desc'});
    res.render('home/index',{phim:movies,newOddFilm:newOddFilm,
                            trailer:trailer,newUpdateOddFilm:newUpdateOddFilm,
                            newUpdateSeriesFilm:newUpdateSeriesFilm,
                            hotOddFilmWeek:hotOddFilmWeek});
};

module.exports.detail =async function(req, res){
    const id = req.params.id;
    let film = await Phim.find({_id:id});
    res.render('Film/detail',{film:film});// đường dẫn thư mục đến file view
}
module.exports.listCategory = async function(req,res){
    const id = req.params.id;
    let category = await Category.find({changeName:id});
    let film =await Phim.find({category:{$elemMatch:{name:category[0].name}}}).sort({date:'desc'});
    res.render("Film/listCategory",{film:film});
}
module.exports.listCountry = async function(req,res){
    const id = req.params.id;
    let country = await Country.find({changeName:id});
    let film =await Phim.find({country:{$elemMatch:{name:country[0].name}}}).sort({date:'desc'});
    res.render("Film/listCountry",{film:film});
}
module.exports.listOddFilm = async function(req,res){
    // const id = req.params.id;
    let film = await Phim.find({category:{$elemMatch:{name:"Phim lẻ"}}}).sort({date:'desc'});
    res.render("Film/listOddFilm",{film:film});
}
module.exports.listSeriesFilm = async function(req,res){
    let film = await Phim.find({category:{$elemMatch:{name:"Phim bộ"}}}).sort({date:'desc'});
    res.render("Film/listSeriesFilm",{film:film});
}
module.exports.listYear= async function(req,res){
    const id = req.params.id;
    console.log(id);
    if(id == "-2014"){
        let film = await Phim.find({year:{$lt:2014}}).sort({date:'desc'});
        res.render("Film/listYearFilm",{film:film});
    }
    else{
        let film = await Phim.find({year : id});
        res.render("Film/listYearFilm",{film:film});
    }
}
module.exports.getListFilmWithTab = async function(req, res){
    const type = req.query.type;// lấy biến từ ajax (không lưu biến truyền trong router)
    let film = undefined;
    if(type == "fullFilm"){
        film = await Phim.find({category:{$elemMatch:{name:"Phim lẻ"}}}).where({status:"Hoàn thành"}).limit(10).sort({date:'desc'});
    }
    else{
        let category = await Category.find({changeName:type});
        film = await Phim.find({category:{$elemMatch:{name:category[0].name}}}).limit(10).sort({date:'desc'});
    }
    
    res.send(film);
}