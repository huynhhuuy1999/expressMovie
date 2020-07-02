$(document).ready(function(){
    $(".nav-link").click(function(){
        let id = $(this).attr("id");
        $(".nav-link").css({"background-color":"rgb(82, 80, 84)","color":"#FFF"});
        $("#"+id).css({"background-color":"#2c2c2e","color":"#56d3fc"});
        $.ajax({
            type:"GET",
            url:"/Film/getListFilmWithTab",
            data:{
                type:id
            },
            success:function(data){
                $(".list").empty();
                let x = "";
                if(id === "series-film")
                    x = "/tập";
                data.forEach(film => {
                    $(".list").append("<div class='item-new-film p-2'>\
                        <div class='img-new-film'>\
                            <img src='/image/"+film.image+"', alt=''>\
                        </div>\
                        <div class='info-new-film pl-2'>\
                            <span class='name-new-film'>"+film.name+"</span><br>\
                            <span class='nameEng-new-film'>"+film.nameEnglish+"</span><br>\
                        </div>\
                        <div class='time-new-film'>\
                            <span>"+film.time+" phút"+x+"</span>\
                        </div>\
                    </div>")
                });
            },
            error:function(err){

            }
        });
    })
});