document.addEventListener('DOMContentLoaded', () => {

// Music Player
    const audio = document.getElementById("backgroundMusic");
    const playButton = document.getElementById("playButton");
    const pauseButton = document.getElementById("pauseButton");
    const nextButton = document.getElementById("nextSong");

    const songs = [
        "../Music/flow-211881.mp3",
        "../Music/for-her-chill-upbeat-summel-travel-vlog-and-ig-music-royalty-free-use-202298.mp3",
        "../Music/island-breeze-214305.mp3",
        "../Music/radiant-waves-213390.mp3",
        "../Music/sunrise-serenade-213616.mp3"
    ];

    let currentSong = 0;

    const loadSong = (index) => {
        audio.src = songs[index];
        audio.play();
    };

    playButton.addEventListener("click", () => audio.play());
    pauseButton.addEventListener("click", () => audio.pause());
    nextButton.addEventListener("click", () => {
        currentSong = (currentSong + 1) % songs.length;
        loadSong(currentSong);
    });

    audio.addEventListener('ended', () => {
        currentSong = (currentSong + 1) % songs.length;
        loadSong(currentSong);
    });

    loadSong(currentSong);

// Typing Effect
    class TypingEffect {
        constructor(element, textToType, interKeyStrokeDurationInMs) {
            this.element = element;
            this.textToType = textToType;
            this.interKeyStrokeDurationInMs = interKeyStrokeDurationInMs;
            this.currentIndex = 0;
            this.intervalID = null;
        }

        startTyping() {
            this.stopTyping();
            this.currentIndex = 0;

            this.intervalID = setInterval(() => {
                this.currentIndex += 1;
                this.element.innerText = this.textToType.substring(0, this.currentIndex); 

                if (this.currentIndex > this.textToType.length) {
                    this.stopTyping();
                }
            }, this.interKeyStrokeDurationInMs);
        }

        stopTyping() {
            if (this.intervalID) {
                clearInterval(this.intervalID);
                this.intervalID = null;
            }
        }
    }

    const typingEffectText = document.getElementById("typingEffect");
    const text = "Click play to listen to the song";
    const typingEffect = new TypingEffect(typingEffectText, text, 150);
    typingEffect.startTyping();
});
