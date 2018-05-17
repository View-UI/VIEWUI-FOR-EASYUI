/***********

* 作者：poya QQ：931989338
* 讨论群：149663025
* 更新日期：2017/2/17
* 邮箱：djcbpl@163.com

* 广告：本人承接各类大中小型管理系统的软件的设计与主题开发，有需要的朋友联系我啦~~~~
**********************************************************/
(function($){$.fn.compSearchBox=function(){$(function(){$('#click_event').click(function(){if($('#hidden_enent').is(':hidden')){$(this).addClass("more_bg"); $('#hidden_enent').show(); $('#click_event').val('点击隐藏'); }else{$(this).removeClass("more_bg"); $('#hidden_enent').hide(); $('#click_event').val('点击显示'); } }); $('#click_event2').click(function(){if($('#hidden_enent2').is(':hidden')){$(this).addClass("more_bg"); $('#hidden_enent2').show(); $('#click_event2').val('点击隐藏'); }else{$(this).removeClass("more_bg"); $('#hidden_enent2').hide(); $('#click_event2').val('点击显示'); } }); }); } })(jQuery);
//checkbox全选
$(document).click(function(){$("table :checkbox:first").change(function(){$(this).closest("table").find(":checkbox:not(:first)").prop("checked", this.checked);});
});