function createCard(animalName){
    $(document).ready(function(){
        $('body').append("<div class='card'>\
        <img src='img_avatar2.png' alt='Avatar' style='width:100%'>\
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