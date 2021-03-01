
$(document).ready(function(){
    $('#schedule').on('click',function(){
    $('.modal').show();
})

$('.close').on('click', function(){
    $('.modal').hide();
})
})

$("#apptconfirm").on('click', function(){
    console.log("click");

    var timeInput= $("#timeInput").val();
    var apptDate = $("#dateselect").val();

    $('#apptconfirm').hide();
    
    var confirmMsg = $("<p></p>").text("Your appointment is scheduled for " + apptDate + "at " + timeInput);

    $("#confirmdiv").append(confirmMsg);

        
})




    
    







// add youtube api
// add youtube search bar 
// add result menu 

// add button id in HTML for youtube search
var searchEl = document.querySelector('#search-yt');

// function handleSearchFormSubmit(event) {
//     event.preventDefault();
// }

function getYoutubeAPI(searchTerm) {
    fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyAOJ6CvOZGZ_RiV0g5CnQB1SFeQthDvKlo&q=" + searchTerm)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
    })
    .catch(function(err) {
        console.error(err)
    });
};

getYoutubeAPI("bts")