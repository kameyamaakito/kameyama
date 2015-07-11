function record(){
	var name = document.test.name.value;
	document.namae=name;
	alert("cookie生成");
}

function check(){
	alert(document.namae);
}

function get(){
	document.test.name.value = document.namae;
}
