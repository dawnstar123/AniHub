function createCard(animalName){
    $(document).ready(function(){
	$('body').append("<br></br>");
        $('body').append("<div class='card' style='margin-bottom: 100px'>\
        <img src='http://www.w3schools.com/bootstrap/img_avatar4.png' alt='Avatar' style='width:100%'>\
<div class='container'>\
<h4><b>" + animalName + "</b></h4>\
<p>Interior Designer</p>\
</div>\
</div>");
	
    })
}
createCard("Your mother");
createCard("Your father");
createCard("your mother");
