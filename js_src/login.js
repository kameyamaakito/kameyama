
function loadText(){
	var user_id=document.test.user_id.value;
	var passwd=document.test.passwd.value;
	alert(passwd);
	alert(user_id);
}

function cookieTest(){
    var user_id=document.test.user_id.value;
    var passwd=document.test.passwd.value;
    document.user_data='user_data='+user_id;
    document.user_data='user_data='+passwd;
    alert(document.user_data);
}
