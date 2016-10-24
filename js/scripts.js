
$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var color = $("input#color").val();
    var tvshow = $("input#tvshow").val();
    var animal = $("input#animal").val();

    var array = [color, tvshow, animal];
    var newArray = [];
    newArray.push(array[1]);
    newArray.push(array[0]);
    newArray.push(array[2]);
    console.log(newArray);
    $('ul').append("<li>"+newArray[0]+"</li>");
    $('ul').append("<li>"+newArray[1]+"</li>");
    $('ul').append("<li>"+newArray[2]+"</li>");
  });
});
