//这里是要添加的城市链接
var subSys_hangzhou = "http://47.97.173.174:8081/front/kphlsecond.html";
var subSys_ningbo = "http://47.97.173.174:8080/front/kphlsecond.html";
var subSys_quzhou = "";
var subSys_zhousan = "";

$('#firstToHZ').click(function() {
    window.location.href = subSys_hangzhou;
});

$('#firstToNB').click(function() {
	window.location.href = subSys_ningbo;
});

$('#firstToQZ').click(function() {
    window.location.href = subSys_quzhou;
});

$('#firstToZS').click(function() {
    window.location.href = subSys_zhousan;
});
