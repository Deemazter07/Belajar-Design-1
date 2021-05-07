
// Music Player
const trackContent = document.querySelector(".track-content");
const playBtn = document.getElementById("music-play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const volume = document.querySelector("#volume-control");

const titleTrack = document.getElementById("title-track");
const audio = document.getElementById("audio");
const progressContainer = document.querySelector(".progress-container");
const progress = document.querySelector(".custom-progress-bar");
const coverTrack = document.getElementById("cover-track");

// Song Titles
const songs = ["HigherGround", "Time-Leaper", "1000"];

let songIndex = 0;

// Load Song info DOM
loadSong(songs[songIndex]);

// Update song detalis
function loadSong(song) {
  titleTrack.innerText = song;
  audio.src = "music/" + song + ".mp3";
  coverTrack.src = "styling/" + song + ".jpg";
}

function playSong() {
  trackContent.classList.add("playing");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");

  audio.play();
}

function pauseSong() {
  trackContent.classList.remove("playing");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");

  audio.pause();
}

function prevSong() {
  songIndex--

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

function nextSong() {
  songIndex++

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

function updateProgress(e) {
  const {duration, currentTime} = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
};

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

function setVolume(e) {
  audio.volume = e.currentTarget.value / 100;
}

// Event Listeners
playBtn.addEventListener("click", () => {
  const isPlaying = trackContent.classList.contains("playing");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change Song Event
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

audio.addEventListener("timeupdate", updateProgress);

progressContainer.addEventListener("click", setProgress);

audio.addEventListener("ended", nextSong);

volume.addEventListener("change", setVolume);




// Dynamic Year Copyright
const d = new Date();
const n = d.getFullYear();
document.getElementById("cr-dynamic").innerHTML = n;
