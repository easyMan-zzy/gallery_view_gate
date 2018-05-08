//这里是要添加的城市链接
var subSys_hangzhou = "http://47.97.173.174:8081/front/kphlsecond.html";
var subSys_ningbo = "http://47.97.173.174:8080/front/kphlsecond.html";
var subSys_quzhou = "http://kphl.qzkx.gov.cn:8081/front/kphlsecond.html";
var subSys_zhousan = "";
//杭州
$('.hangzhou').click(function() {
    window.location.href = subSys_hangzhou;
});
//衢州
$('.quzhou').click(function() {
    window.location.href = subSys_quzhou;
});
//宁波
$('.ningbo').click(function() {
	window.location.href = subSys_ningbo;
});
//舟山
$('.zhoushan').click(function() {
    window.location.href = subSys_zhousan;
});
