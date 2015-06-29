/**
* 个人中心模块
*/
var personal=(function(_self){
	
	return _self;
})(window.personal||{});
//alert(1)
mui(".user-header").on("tap","#login_btn",function(){
    window.jsHandler.changeViewPager('login.html',"登录");
});