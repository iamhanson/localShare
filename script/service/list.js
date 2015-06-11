//home模块
var list=(function(_self){
    _self.showPopSelect=function(){
        $("#pop_select").hide();
        $("#pop_select").css({"display":"-webkit-box"});
        $("#pop_select").css({"height":"10rem"});
    };
    return _self;
})(window.list||{});
$(function(){
    //点击弹出选择层
    $("#header_opt").find("li").bind("click",function(){
        alert($("body").scrollTop)
        commonHelper.popCover(function(){
            list.showPopSelect();
            $("body").find(".pop-cover").one("click",function(){
                $("body").find(".pop-cover").remove();
                $("#pop_select").hide();
                $("#pop_select").css({"height":"0rem"});
            });
        });
    });
    
    
});