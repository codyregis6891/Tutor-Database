
//tutor modal card scheduling function

$(document).ready(function(){
    $('#schedule').on('click',function(){
    $('.modal-tutor').show();
})

$('.close').on('click', function(){
    $('.modal-tutor').hide();
})
})

$("#apptconfirm").on('click', function(){
    console.log("click");

    var timeInput= $("#timeInput").val();
    var apptDate = $("#dateselect").val();
    
    $('#apptconfirm').hide();

    console.log(timeInput)
    console.log(apptDate)

    if($('#dateselect').val() === '' || $('#timeInput').val()=== 'Choose a Time'){
        
        var failMsg = $("<p></p>").text("Please choose a date from the calendar and/or a time slot from the dropdown");
        $("#confirmdiv").append(failMsg);
        
    }else {

        var confirmMsg = $("<p></p>").text("Your appointment is scheduled for " + apptDate + "at " + timeInput);
        $("#confirmdiv").append(confirmMsg);
    };

    

    $("#apptconfirm").reset();
    
    

        
});




// add button id in HTML for youtube search
var searchContentEl = document.querySelector('#search-yt');

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
        searchContentEl.relatedToVideoId = "Javacript"
        console.log(data.items[0].id.videoId)

        for (var i=0; i < 3; i++){
            var videoId = data.items[i].id.videoId
        $("#video-content").append('<iframe width="560″ height="315″ src="https://www.youtube.com/embed/' + videoId + '" frameborder="0″ allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
        }

        
    })
    .catch(function(err) {
        console.error(err)
    });
};



$("#floatingSelect").on("change" , function(){
    var selectLanguage = $("#floatingSelect").val()
    console.log(selectLanguage)
    $("#video-content").empty()
    getYoutubeAPI(selectLanguage)
})