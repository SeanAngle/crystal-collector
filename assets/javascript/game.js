var random_result;
var lost = 0;
var win = 0;
var previous = 0;


var resetAndStart = function() {

    $(".crystals").empty();
    $("#win").html("Wins: " + win);
    $("#lost").html("Loses: " + lost);



    var images = [
        'assets/images/crystal1.jpg',
        'assets/images/crystal2.jpg',
        'assets/images/crystal3.jpeg',
        'assets/images/crystal4.jpeg'];

    random_result = Math.floor(Math.random() * 69) + 30;

    $("#result").html('Get to this number: ' + random_result);

    for(var i = 0; i < 4; i++){
        var random = Math.floor(Math.random() * 11) + 1;


        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal' , 
                "data-random" : random
            });

            crystal.css({
                "background-image":"url('" + images[i] + "')",
                "background-size":"cover"
            });
            // crystal.html(random); this is to see the number of each crystal
        $(".crystals").append(crystal);
    }

    $("#previous").html("Your number is: " + previous);
}

resetAndStart();

$(document).on('click', ".crystal", function(){

    var num = parseInt($(this).attr("data-random"));

    previous += num;

    $("#previous").html("Your number is: " + previous)

    console.log(previous);

    if(previous > random_result){

        lost++;

        $("#lost").html("Loses: " + lost);

        previous = 0;

        resetAndStart();

    }else if(previous === random_result){

        win++;

        $("#win").html("Wins: " + win);

        previous = 0;

        resetAndStart();
    }



})