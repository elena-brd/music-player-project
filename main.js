const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const musicContainer = document.getElementById('music-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const time = document.getElementById('current-time');
const volume = document.getElementById('volume');

const songs = ['hey', 'summer', 'ukulele'];

let songTrackIndex = 0;

loadSong(songs[songTrackIndex]);

function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}

function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    audio.pause()
}

function nextSong() {
    songTrackIndex++;
    if (songTrackIndex > songs.length - 1) {
        songTrackIndex = 0
    }
    loadSong(songs[songTrackIndex]);
    playSong()
}

function prevSong() {
    songTrackIndex--;
    if (songTrackIndex < 0) {
        songTrackIndex = songs.length - 1
    }
    loadSong(songs[songTrackIndex]);
    playSong()
}

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);
volume.addEventListener('change', () => {
    audio.volume = volume.value
})











