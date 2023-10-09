
songsData = [
    {
        1: {
            "title": "Lost in the City Lights",
            "artist": "Cosmo Sheldrake",
            "audio_url": "../assets/audio/lost-in-city-lights-145038.mp3",
            "image_url": "../assets/img/cover-1.png",
            "duration": 138
        },
        2: {
            "title": "Forest Lullaby",
            "artist": "Lesfm",
            "audio_url": "../assets/audio/forest-lullaby-110624.mp3",
            "image_url": "../assets/img/cover-2.png",
            "duration": 72
        }
    }
]
const INITIAL_SONG = songsData[0][1].audio_url;
let isPlaying = false;
let songPlaying = 1;
let audio;
let songTitle = document.getElementById('song-title');
let songArtist = document.getElementById('song-artist');
let songImage = document.getElementById('image-container')
let audioTotalDuration = document.getElementById('total-time');

document.getElementById('pause-btn').addEventListener('click', () => {
    if (isPlaying == true) {
        stopSong();
    } else {
        playSong(songPlaying)
    }
})

document.getElementById('next-btn').addEventListener(
    'click',()=>{
        nextSong();
    }
)

function playSong(id) {
    songTitle.innerHTML = songsData[0][id].title;
    songArtist.innerHTML = songsData[0][id].artist;
    songImage.innerHTML = '<img src="' + songsData[0][id].image_url + '" alt="">'
    audio = new Audio(songsData[0][id].audio_url);
    audioTotalDuration.innerHTML = songsData[0][id].duration / 60;
    audio.play();
    isPlaying = true;
    songPlaying = id;
}


function stopSong() {
    isPlaying = false;
    audio.pause();
}

function previusSong() {

}

function nextSong() {
    audio.pause();
    isPlaying = false;
    playSong(songPlaying+1);
}