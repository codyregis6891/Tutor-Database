
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
    
    var confirmMsg = $("<p></p>").text("Your appointment is scheduled for " + apptDate + "at " + timeInput);

    $("#confirmdiv").append(confirmMsg);

        
})




    
    







// add youtube api
// add youtube search bar 
// add result menu 

// add button id in HTML for youtube search
var searchContentEl = document.querySelector('#search-yt');
var displayVideo = $("#video-content");

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

        $(displayVideo).append(data.items[0].snippet)

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

    // var populateVideo = $(.append(displayVideo))
    // $(displayVideo).append(respond.items[0].snippet)

    getYoutubeAPI(selectLanguage)
})