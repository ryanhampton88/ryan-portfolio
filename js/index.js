let musicBtn = document.getElementById("music");
let audio = document.getElementById("myAudio");
let isPlaying = false;

musicBtn.addEventListener("click", function() {
        playAudio();
})

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

