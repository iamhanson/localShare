//home模块
var login=(function(_self){
    
    return _self;
})(window.login||{});

$(function(){
    $("#register").bind("click",function(){
			//alert(1)
        window.jsHandler.changeViewPager('register.html',"手机号注册");
    });
});
