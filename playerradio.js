var audioPlayer = document.getElementById("audioPlayer");
var playButton = document.querySelector(".play-btn");
var playIcon = document.querySelector(".play-btn img");

function togglePlay() {
    if (audioPlayer.paused) {
        audioPlayer.src = "https://live.radiorockhits.online/listen/radiorockhits/radio.mp3";
        audioPlayer.play();
        playIcon.src = "https://player.radiorockhits.online/stop-icon35px.png";
    } else {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        playIcon.src = "https://player.radiorockhits.online/play-icon35px.png";
    }
}

audioPlayer.addEventListener("ended", function() {
    playIcon.src = "https://player.radiorockhits.online/play-icon35px.png";
});

$(document).ready(function() {
    setInterval(function() {
        $.get('https://live.radiorockhits.online/api/nowplaying/radiorockhits')
            .done(function(data) {
                $('.song-title').text(data.now_playing.song.text);
                $('.cover-image').attr('src', data.now_playing.song.art);
            });
    }, 2000);
});