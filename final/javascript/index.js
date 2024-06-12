// songs

const audio = document.getElementById("backgroundMusic");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const nextButton = document.getElementById("nextSong");

const songs = [
    "Music/flow-211881.mp3",
    "Music/for-her-chill-upbeat-summel-travel-vlog-and-ig-music-royalty-free-use-202298.mp3",
    "Music/island-breeze-214305.mp3",
    "Music/radiant-waves-213390.mp3",
    "Music/sunrise-serenade-213616.mp3" 
];

let currentSong = 0;

const loadSong = (i) => {
    audio.src = songs[i];
    audio.play();
};

playButton.addEventListener("click", () => audio.play());
pauseButton.addEventListener("click", () => audio.pause());
nextButton.addEventListener("click", () => {
    currentSong = (currentSong + 1) % songs.length;
    loadSong(currentSong);
});

loadSong(currentSong);

audio.addEventListener('ended', () => {
    currentSong = (currentSong + 1) % songs.length;
    loadSong(currentSong);
});
