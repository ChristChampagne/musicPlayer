
songsData = [
    {
        1: {
            "title": "Lost in the City Lights",
            "artist": "Cosmo Sheldrake",
            "audio_url": "assets/audio/lost-in-city-lights-145038.mp3",
            "image_url": "assets/img/cover-1.png",
            "duration": 72
        },
        2: {
            "title": "Forest Lullaby",
            "artist": "Lesfm",
            "audio_url": "assets/audio/forest-lullaby-110624.mp3",
            "image_url": "assets/img/cover-2.png",
            "duration": 138
        },
    }
]
let isPlaying;
let songPlaying = 1;
let audio;
let songTitle = document.getElementById('song-title');
let songArtist = document.getElementById('song-artist');
let songImage = document.getElementById('image-container')
let audioTotalDuration = document.getElementById('total-time');
let songProgressBar = document.getElementById('progress-bar')
document.getElementById('pause-btn').addEventListener('click', () => {
    if (isPlaying == true) {
        stopSong();
    } else {
        playSong(songPlaying)
    }
})
document.getElementById('next-btn').addEventListener(
    'click', () => {
        nextSong();
    }
)
document.getElementById('last-btn').addEventListener('click', () => {
    previusSong();
})

function playSong(id) {
    songTitle.innerHTML = songsData[0][id].title;
    songArtist.innerHTML = songsData[0][id].artist;
    songImage.innerHTML = '<img src="' + songsData[0][id].image_url + '" alt="">'
    audio = new Audio(songsData[0][id].audio_url);
    audioTotalDuration.innerHTML = "0" + Math.trunc(songsData[0][id].duration / 60) + ":00";
    step = 100 / songsData[0][id].duration;
    songProgressBar.step = step;
    isPlaying = true;
    songPlaying = id;
    audio.play();

    refreshBar = setInterval(() => {
        progressBar(step);
    }, 1000)


}
function stopSong() {
    clearInterval(refreshBar)
    isPlaying = false;
    songProgressBar.value = 0;
    audio.pause();
}
function previusSong() {
    stopSong()
    songPlaying - 1
    console.log(songPlaying)
    if (songPlaying == 0) {
        playSong(Object.keys(songsData).lenght);
    } else {
        playSong(songPlaying - 1)
    }
}
function nextSong() {
    if (songPlaying >= Object.keys(songsData[0]).length) {
        stopSong()
        playSong(1)
    } else {
        stopSong()
        playSong(songPlaying + 1);
    }
}
function progressBar(advanceValue) {
    actualValue = songProgressBar.value;

    if (audio.ended || actualValue>=100 || isPlaying == false) {
        songProgressBar.value = 0;
        return;
    }

    newValue = parseFloat(actualValue) + parseFloat(advanceValue);
    songProgressBar.value = newValue;
}
function changeSongTime() {
    secondsPerPercent = songsData[0][songPlaying].duration / 100;
    audio.currentTime = songProgressBar.value * secondsPerPercent;
}
