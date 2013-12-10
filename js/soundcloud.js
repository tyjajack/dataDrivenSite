var trackListing = $("#trackListing");
var playlist = $("#playlist");
var position = $("#position");
var result;
var currentlyPlayingSound;
<<<<<<< HEAD
var currentlyPlayingIndex = 0;
=======
var currentlyPlayingIndex;
var nextElement = playlist.find('li').eq(currentlyPlayingIndex);
var $this;
>>>>>>> f061e2f81197422e27211a005300ac4f3720dd6e


SC.initialize({
    client_id: "3a0223a4404c4efe6133f785bc3cea54",
    redirect_url: "http://127.0.0.1"
});

<<<<<<< HEAD
$(".playToggle").click(function () {
    if(typeof currentlyPlayingSound !== "undefined")
    {
        if(currentlyPlayingSound.playState == 1) togglePlay();
        else{
            setTrack();
            setSong();
        }
    }
    else{
        setTrack();
        setSong();
    }

})

$("#removeSelected").click(function() {
    if($("li.active").hasClass("active")){
        removeSelected();
    }

});

function togglePlay() {

    if (currentlyPlayingSound.paused) {
        $(".playToggle").html("&#305;&#305;");
        currentlyPlayingSound.play();
    } else {
        $(".playToggle").html("&#8250;");
=======
$(".playing").click(function() {
    togglePlay();
});

function togglePlay(){
    $('#toggle').bind("click", function() {

        if ($(this).attr("class") == "playing") {
            $(this).attr("class", "pause");
            $(this).html("&#8250;");
            currentlyPlayingSound.pause();
        }else {
            $(this).attr("class", "playing");
            $(this).html("&#305;&#305;");
            currentlyPlayingSound.play();
        }
     
    });
}

function togglePlay() {
    $(this).toggleClass("playing")

    if ($(this).hasClass("playing")) {
        $(".playing").html("&#305;&#305;");
        currentlyPlayingSound.play();
    }
    else if(!$(this).hasClass("playing")){
        $(".playing").html("&#8250;");
>>>>>>> f061e2f81197422e27211a005300ac4f3720dd6e
        currentlyPlayingSound.pause();
    }

}
<<<<<<< HEAD
function stopPlaying(){
    $(".playToggle").html("&#8250;");
    currentlyPlayingSound.stop();
    $("#txtNow").html("");
    position.val(0);
}

$("#btnPrevious").click(function() {
if(typeof currentlyPlayingSound !== "undefined"){
    if(currentlyPlayingSound.playState == 1){
        if (currentlyPlayingIndex != 0) {
            currentlyPlayingIndex--;
            setTrack();
            setSong();
        }
    }else{
       if (currentlyPlayingIndex != 0) {
            currentlyPlayingIndex--;
            setTrack();
        } 
    }
}else if(typeof currentlyPlayingSound == "undefined"){
        if (currentlyPlayingIndex != 0) {
            currentlyPlayingIndex--;
            setTrack();
        }
    }

});

$("#btnStop").click(function() {
    if(currentlyPlayingSound) stopPlaying();
});

$("#btnNext").click(function() {
if(typeof currentlyPlayingSound !== "undefined"){
    if(currentlyPlayingSound.playState == 1){
        //try to play next song
        if (currentlyPlayingIndex < playlist.children().length) {
            currentlyPlayingIndex++;
            setTrack();
            setSong();
        }
    }else{
       if (currentlyPlayingIndex < playlist.children().length) {
            currentlyPlayingIndex++;
            setTrack();
        } 
    } 
}else if(typeof currentlyPlayingSound == "undefined"){
        if (currentlyPlayingIndex < playlist.children().length) {
            currentlyPlayingIndex++;
            setTrack();
        }
    }
});

function removeSelected(){
    $("li.active").remove();
    $("#txtNow").html("");
    if(currentlyPlayingSound) stopPlaying();
}

=======

$("#btnPrevious").click(function() {
        if (currentlyPlayingIndex != 0) {
            currentlyPlayingIndex--;
            isHighlighted();
        }
});

$("#btnStop").click(function() {
    togglePlay();
    currentlyPlayingSound.stop();
});

$("#btnNext").click(function() {
        //try to play next song
        if (currentlyPlayingIndex < playlist.children().length) {
            currentlyPlayingIndex++;
            isHighlighted();
        }
});

>>>>>>> f061e2f81197422e27211a005300ac4f3720dd6e
//when the search button is clicked...
$("#btnSearch").click(function() {
    //get the search value
    var searchValue = $("#txtSearch").val();

    //list the songs of that value
    listSongs(searchValue);
});

//when enter is pressed in the search box
$('#txtSearch').on("keypress", function(e) {
    if (e.keyCode == 13) {
        var searchValue = $("#txtSearch").val();
        listSongs(searchValue);
    }
});
$("#btnClearTL").click(function () {
    //clear out track listing
    trackListing.empty();
});

//highlights song in playlist when active/playing
<<<<<<< HEAD
function setTrack() {
=======
function isHighlighted() {
>>>>>>> f061e2f81197422e27211a005300ac4f3720dd6e

//make sure there is a next song to play
    if (currentlyPlayingIndex < playlist.children().length) {

        var nextElement = playlist.find('li').eq(currentlyPlayingIndex);

        if (!$(this).hasClass("active")) {
            // Remove the class from anything that is active
            $("li.active").removeClass("active");
            // And make this active
            $(nextElement).addClass("active");
        }
<<<<<<< HEAD
    }
}

function setSong(){

    //make sure there is a next song to play
    if (currentlyPlayingIndex < playlist.children().length) {

        var nextElement = playlist.find('li').eq(currentlyPlayingIndex);
=======
>>>>>>> f061e2f81197422e27211a005300ac4f3720dd6e

        //update the now playing HTML
        $("#txtNow").html("Now playing: " + nextElement.html());
        var trackID = nextElement.data("trackID");
        //play the next song
        playSong(trackID);
    }
}

//this... plays a song
function playSong(trackID) {

    //make sure this sound exists
    if (currentlyPlayingSound) {
        //if it does, stop it
        currentlyPlayingSound.stop();
    }

    SC.stream("/tracks/" + trackID, function(sound) {

<<<<<<< HEAD
        $(".playToggle").html("&#305;&#305;");
        currentlyPlayingSound = sound;
        currentlyPlayingSound.play({

            whileplaying: function() {
=======
        $(".playing").html("&#305;&#305;");
        currentlyPlayingSound = sound;
        sound.play({
            whileplaying: function() {

                console.log(this.position / this.duration);
>>>>>>> f061e2f81197422e27211a005300ac4f3720dd6e
                position.val(this.position / this.duration);
            },
            onfinish: function() {
                //try to play next song
<<<<<<< HEAD

                //make sure there is a next song to play
                if (currentlyPlayingIndex+1 < playlist.children().length) {
                    currentlyPlayingIndex++;
                    var nowPlaying = playlist.find('li').eq(currentlyPlayingIndex)
                    //update the now playing HTML
                    $("#txtNow").html("Now playing: " + nowPlaying.html());

                    //play/highlight the next song
                    setTrack();
                    setSong();
                }
                else stopPlaying();
=======
                currentlyPlayingIndex++;

                //make sure there is a next song to play
                if (currentlyPlayingIndex < playlist.children().length) {

                    //update the now playing HTML
                    $("#txtNow").html("Now playing: " + nextElement.html());

                    //play the next song
                    playSong(nextElement.data("trackID"));


                }
>>>>>>> f061e2f81197422e27211a005300ac4f3720dd6e

            }
        });
    });
}

//respond to a click on any list item in playlist
$("#playlist").on("click", "li", function(event) {

    $("li.active").removeClass("active");
    $(this).addClass("active");

    var clickedElement = $(event.target);

    //update what is currently playing
    currentlyPlayingIndex = clickedElement.index();

    //get the associated track of the clicked element
    var trackID = clickedElement.data("trackID");

<<<<<<< HEAD
=======
    //show the track title for "now playing"
    $("#txtNow").html("Now playing: " + clickedElement.html());

    //start playing the track
    playSong(trackID);

>>>>>>> f061e2f81197422e27211a005300ac4f3720dd6e
});

//respond to a click on a list item in track listing
//for ANY LIST ITEM regardless of when it was added
$("#trackListing").on("click", "li", function(event) {
    var clickedElement = $(event.target);

    //get index of the index of the data associated with clicked element
    var arrayIndex = clickedElement.data('index');

    //get the extra data from the result array
    var associatedData = result[arrayIndex];

    //make a clone //its the same but double
    var clonedElement = clickedElement.clone();

    //add some extra data to the cloned element
    //in specific, the trackID to ply whenever this item
    //is clicked
    clonedElement.data("trackID", associatedData.id);

    //add the track title to our playlist div
    playlist.append(clonedElement);

});

//lists songs for us
function listSongs(query) {
    SC.get("/tracks", { limit: 100, q: query }, function(tracks) {
        //store result for later
        result = tracks;

        //clear out track listing
        trackListing.empty();

        //populate new values
        for (var i in tracks) {
            var curTrack = tracks[i];

            trackListing.append(
                "<li data-index='" + i + "'>" + curTrack.title + "</li>"

            );
        }
    });
}

<<<<<<< HEAD


=======
>>>>>>> f061e2f81197422e27211a005300ac4f3720dd6e
/*
 SC.stream("/tracks/293", function(sound){
 sound.play();
 });
 */