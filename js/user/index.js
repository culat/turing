//数据常量
var MyKey='ae8b68b6e7164229a53ea7a258d78b54';
var MyUserId='主人1';
var Turing='灵米酱';
var User='主人';
//自定函数
function PostTuring(key,info,userid){
	var turl='http://www.tuling123.com/openapi/api';
	$.post(turl,
	{
	  key:key,
	  info:info,
	  userid:userid
	},
	function(data){
		var myDate=new Date();
		if(data.url){
			AddTableLine(Turing,data.text,myDate.toLocaleString());
			AddTableLine(Turing,data.url,myDate.toLocaleString());
		}else if(data.list){
			AddTableLine(Turing,data.text,myDate.toLocaleString());
			AddTableLine(Turing,data.list,myDate.toLocaleString());
		}else{
			AddTableLine(Turing,data.text,myDate.toLocaleString());
		}
		ScrollToEnd();
	});
}
function AddTableLine(row1,row2,row3){
	var trHTML='<tr><td>'+row1+'</td><td>'+row2+'</td><td>'+row3+'</td></tr>';
	var tableBody='#output_table_body';
	$(tableBody).append(trHTML);
}
function ScrollToEnd(){//滚动到底部
	var h = $(document).height()-$(window).height();
	$(document).scrollTop(h); 
}
//自动事件
window.onload = function(){
	var myDate=new Date();
	AddTableLine(Turing,'你好，我是灵米酱，初次见面，请多多指教。',myDate.toLocaleString());
}
//控件事件
$('#button_submit').click(function(){
	var myDate=new Date();
	AddTableLine(User,$('#input_text').val(),myDate.toLocaleString());
	PostTuring(MyKey,$('#input_text').val(),MyUserId);
	$('#input_text').val(null);
});
//回车提交事件
$('body').keydown(function() {
	if (event.keyCode == "13") {//keyCode=13是回车键
		$('#button_submit').click();
	}
});
