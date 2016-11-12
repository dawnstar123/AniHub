function start(animalName){
    $(document).ready(function(){
        $('body').append("<div class='card'>\
  <div class='container'>\
    <h4><b>" + animalName + "</b></h4>\
    <p>Interior Designer</p>\
  </div>\
</div>");
    })
}
start("Your mother");

// Your mother!
