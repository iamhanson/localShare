//home模块
var home=(function(_self){
    
    return _self;
})(window.home||{});

$(function(){
    $("#category").find(".category-item").bind("click",function(){
        window.jsHandler.changeViewPager();
    });
    $("#push").find(".hobby-item-wrap li").bind("click",function(){
        window.jsHandler.changeViewPager();
    });
});
