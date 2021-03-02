// $.clearFormFields = function(area) {
//     $(area).find('input[type="text"],input[type="email"],textarea,select').val('');
//   };
//tutor modal card scheduling function

$(document).ready(function(){
    $('.schedule').on('click',function(){
    $('.modal-tutor').show();
})

$('.close').on('click', function(){
    
    
    $('.modal-tutor').hide();
})
})

$("#apptconfirm").on('click', function(){
    console.log("click");
    var modalState = $(this).find(".schedule")
    console.log(modalState)
    if(modalState === "close") {
        $("#apptconfirm").show()
        $(".schedule").data("modal", "open")
    } else {
        $("#apptconfirm").hide()
        $(".schedule").data("modal", "close")
    }

    var timeInput= $(".timeInput").val();
    var apptDate = $(".dateselect").val();
    
    $('#apptconfirm').hide();
    $(".schedule").data("modal", "close")
    console.log(timeInput)
    console.log(apptDate)

    if($('.dateselect').val() === '' || $('.timeInput').val()=== 'Choose a Time'){
        
        var failMsg = $("<p></p>").text("Please choose a date from the calendar and/or a time slot from the dropdown");
        $("#confirmdiv").append(failMsg);
        
    }else {

        var confirmMsg = $("<p></p>").text("Your appointment is scheduled for " + apptDate + "at " + timeInput);
        $("#confirmdiv").append(confirmMsg);
    };

    

    
$(".timeInput").val("")
$(".dateselect").val("")
    

        
});




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

        for (var i=0; i < 4; i++){
            var videoId = data.items[i].id.videoId
        $("#video-content").append('<iframe class="col-md-6 justify-content=center" width="420" height="345" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0″ allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')



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