 var files = [
    "pavans_first_birthday.mov",
    "owens_asleep_at_the_computer.jpg",
    "michael_fights_a_polar_bear.mp4",
    "nate_road_rage.avi",
    "ruby_skydiving.jpeg",
    "ken_getting_his_black_belt.png",
    "dan_winning_underground_street_race.mov",
    "its_hard_to_come_up_with_file_names.gif",
    "seriously_this_is_taking_too_long.mpg",
    "i_wonder_how_many_of_these_i_should_have.png",
    "probably_a_few_more.avi",
    "nutmeg_is_clawing_my_sneakers_again.mp4",
    "cat_i_will_destroy_you.gif",
    "i_wish_we_had_a_dog.jpeg",
    "stop_looking_at_me_like_that_nutmeg.mpeg",
    "aww_i_cant_hate_you.png",
    "omg_my_sneakers.avi",
    "cat_you_are_the_worst.mp4"
  ];

var imageFiles = [];
var movieFiles = [];
var allSortedFiles = []; // empty array to hold files sorted by algorithm

$(function() {  // for-loop function to print 'files' var to 'start' <ul> as list elements

    files.sort(); //starts by sorting array into alphabetical order(a native js function)

    for (var f = 0; f < files.length; f++)
    {
        $('#start').append("<li>" + files[f] + "</li>");
    }

});

function sortByExtension() {

    for (var i = 0; i < files.length; i++){

        if (files[i] == files[i]) // just checking the output works
        {
            imageFiles.push(files[i]);
        }
        else 
        {
            movieFiles.push(files[i]);
        }

       
    }

    console.log(imageFiles);

   $(allSortedFiles).append(imageFiles + movieFiles);
    
}


sortByExtension();

$('button').on("click", function() {

    for (var s = 0; s < allSortedFiles.length; s++) // for-loop function to print 'sortedFiles' var to 'result' <ul> as list elements
    {
        $('#result').append("<li>" + allSortedFiles[s] + "</li>");
    }

});