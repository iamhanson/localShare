/**
* 公共模块，提供公用的函数，方法等
*/
var commonHelper=(function(_self){
    //ToDo
    _self.popCover=function(callBack){
        $("body").find(".pop-cover").remove();
        var coverHtml='<div class="pop-cover"></div>';
        $("body").css({"overflow":"hidden"}).append(coverHtml);
        callBack();
    }
    _self.closeCover=function(){
        $("body").find(".pop-cover").remove().removeAttr("style");
    };
    return _self;
})(window.commonHelper||{});