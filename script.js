function createCard(name, phone, address, severity){
    $(document).ready(function(){
        $('body').append("<div class='card'>\
        <img src='http://www.w3schools.com/bootstrap/img_avatar4.png' alt='Avatar' style='width:100%'>\
<div class='container'>\
<h4><b>" + name + "</b></h4>\
<p>" + phone + "</p>\
<p>" + address + "</p>\
<p>Severity: " + severity + "</p>\
</div>\
</div>");
	$('body').append("<br></br>");
    })
}
var count = 0;
var database = firebase.database();
var add;
var arrNames = [];
var arrObjects = [];
var ref = firebase.database().ref();
var query = firebase.database().ref("users").orderByKey();
ref.once("child_added").then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
	var childData = childSnapshot.val();
	if (childData == "[object Object]"){
	    arrObjects.push(childData);
	} else {
	    arrNames.push(childData);
	}
	count++;
    });
    console.log(arrNames);
    console.log(arrObjects);
    for (var i = 0; i < arrNames.length; i++){
	var address;
	var phone;
	var severity;
	var counter = 0;
	for (var val in arrObjects[i]){
	    if (counter == 0){
	        phone = (arrObjects[i])[val];
		console.log(phone);
	    } else if (counter == 1){
		address = (arrObjects[i])[val];
		console.log(address);
	    } else {
		severity = (arrObjects[i])[val];
		console.log(severity);
	    }
	    counter++;
	    if (counter == 3){
		break;
	    }
	}
	createCard(arrNames[i], phone, address, severity);
    }
});
