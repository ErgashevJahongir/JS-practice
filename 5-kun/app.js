const musicContainer = document.querySelector(`.musiqa-container`);
const keyingiBtn = document.querySelector(`#keyingi`);
const oldingiBtn = document.querySelector(`#oldingi`);
const playBtn = document.querySelector(`#play`);

const audio = document.querySelector(`#audio`);
const progress = document.querySelector(`#progress`);
const progressContainer = document.querySelector(`#progress-container`);
const title = document.querySelector(`#title`);
const cover = document.querySelector(`#cover`);

const qushiqlar = [`nashid-1`, `nashid-2`, `nashid-3`];

let qushiqSoni = 0;

loadSong(qushiqlar[qushiqSoni]);

function loadSong(song) {
    title.textContent = song;
    audio.src = `audio/${song}.mp3`;
    cover.src = `img/${song}.jfif`;
}

function playSong() {
    musicContainer.classList.add("play");
    playBtn.querySelector("i.bi").classList.remove("bi-play-fill");
    playBtn.querySelector("i.bi").classList.add("bi-pause-fill");

    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove("play");
    playBtn.querySelector("i.bi").classList.remove("bi-pause-fill");
    playBtn.querySelector("i.bi").classList.add("bi-play-fill");

    audio.pause();
}

function keyingiQushiq() {
    if (qushiqSoni < 2) {
        qushiqSoni = qushiqSoni + 1;
    } else {
        qushiqSoni = 0;
    }

    loadSong(qushiqlar[qushiqSoni]);
    playSong();
}

function oldingiQushiq() {
    if (qushiqSoni > 0) {
        qushiqSoni = qushiqSoni - 1;
    } else {
        qushiqSoni = qushiqlar.length - 1;
    }

    loadSong(qushiqlar[qushiqSoni]);
    playSong();
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    // console.log(duration, currentTime);
    const progressProsent = (currentTime / duration) * 100;
    progress.style.width = `${progressProsent}%`;
}

function setProgress(e) {
    const width = this.clientWidth;
    // console.log(width);
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

playBtn.addEventListener("click", () => {
    const isPlaying = musicContainer.classList.contains(`play`);

    // console.log(isPlaying);
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

keyingiBtn.addEventListener("click", keyingiQushiq);
oldingiBtn.addEventListener("click", oldingiQushiq);

audio.addEventListener("timeupdate", updateProgress);

progressContainer.addEventListener("click", setProgress);

audio.addEventListener("ended", keyingiQushiq);
