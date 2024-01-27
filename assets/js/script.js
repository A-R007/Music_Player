"use strict";

const musicData = [
  {
    backgroundImage: "./assets/images/nenj.jpg",
    posterUrl: "./assets/images/nenj.jpg",
    title: "Nenjukkul Peidhidum",
    album: "Varanam Aayiram",
    year: 2008,
    artist: "Harris Jayaraj",
    musicPath: "./assets/music/Nenjukkul-Peidhidum.mp3",
  },
  {
    backgroundImage: "./assets/images/yellow.jpg",
    posterUrl: "./assets/images/yellow.jpg",
    title: "Yellow",
    album: "Parachutes",
    year: 2000,
    artist: "Coldplay",
    musicPath: "./assets/music/yellow.mp3",
  },
  {
    backgroundImage: "./assets/images/thuli thuli.jpg",
    posterUrl: "./assets/images/thuli thuli.jpg",
    title: "Thuli Thuli",
    album: "Paiyaa",
    year: 2017,
    artist: "Yuvan Shankar Raja",
    musicPath: "./assets/music/Thuli-Thuli-Mazhaiyaai.mp3",
  },
  {
    backgroundImage: "./assets/images/until.jpg",
    posterUrl: "./assets/images/until.jpg",
    title: "Until I Found You",
    album: "Angel Face",
    year: 2023,
    artist: "Stephen Sanchez",
    musicPath: "./assets/music/Until-I-Found-You.mp3",
  },
  {
    backgroundImage: "./assets/images/perfect.jpg",
    posterUrl: "./assets/images/perfect.jpg",
    title: "Perfect",
    album: "Divide",
    year: 2017,
    artist: "Ed Sheeran",
    musicPath: "./assets/music/Perfect.mp3",
  },
  {
    backgroundImage: "./assets/images/love-me.jpg",
    posterUrl: "./assets/images/love-me.jpg",
    title: "Love Me Like You Do",
    album: "Fifty Shades of Grey",
    year: 2017,
    artist: "Ellie Goulding",
    musicPath: "./assets/music/Love-Me-Like.mp3",
  },
  {
    backgroundImage: "./assets/images/those-eyes.jpg",
    posterUrl: "./assets/images/those-eyes.jpg",
    title: "Those Eyes",
    album: "The Sound Of Summer 2023",
    year: 2023,
    artist: "New West",
    musicPath: "./assets/music/Those Eyes.mp3",
  },
  {
    backgroundImage: "./assets/images/jvke.jpg",
    posterUrl: "./assets/images/jvke.jpg",
    title: "Golden Hour",
    album: "this is what ____ feels like",
    year: 2022,
    artist: "JVKE",
    musicPath: "./assets/music/JVKE.mp3",
  },
  {
    backgroundImage: "./assets/images/Love-story.png",
    posterUrl: "./assets/images/Love-story.png",
    title: "Love Story (Taylor's Version)",
    album: "Fearless",
    year: 2021,
    artist: "Taylor Swift",
    musicPath: "./assets/music/Love-Story.mp3",
  },
  {
    backgroundImage: "./assets/images/i-guess.jpg",
    posterUrl: "./assets/images/i-guess.jpg",
    title: "I GUESS I'M IN LOVE",
    album: "Love Bops 2022",
    year: 2022,
    artist: "Clinton Kane",
    musicPath: "./assets/music/i-guess.mp3",
  },
  {
    backgroundImage: "./assets/images/jax.jpg",
    posterUrl: "./assets/images/jax.jpg",
    title: "Like My Father",
    album: "Jax Karaoke Pack",
    year: 2021,
    artist: "Jax",
    musicPath: "./assets/music/jax.mp3",
  },
  {
    backgroundImage: "./assets/images/mast-magan.jpg",
    posterUrl: "./assets/images/mast-magan.jpg",
    title: "Mast Magan",
    album: "2 States",
    year: 2014,
    artist: "Arijit Singh",
    musicPath: "./assets/music/mast-magan.mp3",
  },
  {
    backgroundImage: "./assets/images/daylight.jpg",
    posterUrl: "./assets/images/daylight.jpg",
    title: "Daylight",
    album: "Lover",
    year: 2019,
    artist: "Taylor Swift",
    musicPath: "./assets/music/daylight.mp3",
  },
  {
    backgroundImage: "./assets/images/positions.jpg",
    posterUrl: "./assets/images/positions.jpg",
    title: "Positions",
    album: "Positions",
    year: 2020,
    artist: "Ariana Grande",
    musicPath: "./assets/music/positions.mp3",
  },
  {
    backgroundImage: "./assets/images/lover.jpg",
    posterUrl: "./assets/images/lover.jpg",
    title: "Lover",
    album: "Lover",
    year: 2019,
    artist: "Taylor Swift",
    musicPath: "./assets/music/lover.mp3",
  },
  {
    backgroundImage: "./assets/images/channa.jpg",
    posterUrl: "./assets/images/channa.jpg",
    title: "Channa Mereya",
    album: "Ae Dil Hai Mushkil",
    year: 2016,
    artist: "Arijit Singh",
    musicPath: "./assets/music/channa.mp3",
  },
  {
    backgroundImage: "./assets/images/double-take.jpg",
    posterUrl: "./assets/images/double-take.jpg",
    title: "Double Take",
    album: "double take",
    year: 2019,
    artist: "Dhruv",
    musicPath: "./assets/music/double-take.mp3",
  },
  {
    backgroundImage: "./assets/images/Pavizha.jpg",
    posterUrl: "./assets/images/Pavizha.jpg",
    title: "Pavizha Mazha",
    album: "Athiran",
    year: 2019,
    artist: "K. S. Harisankar",
    musicPath: "./assets/music/Pavizha.mp3",
  },
  {
    backgroundImage: "./assets/images/aaraa.jpg",
    posterUrl: "./assets/images/aaraa.jpg",
    title: "Aaraadhike",
    album: "Ambili",
    year: 2019,
    artist: "Sooraj Santhosh,Madhuvanthi Narayan",
    musicPath: "./assets/music/Aaraadhike.mp3",
  },
  {
    backgroundImage: "./assets/images/mahiye.jpg",
    posterUrl: "./assets/images/mahiye.jpg",
    title: "Mahiye Jinna Sohna",
    album: "Dard",
    year: 2023,
    artist: "Darshan Raval",
    musicPath: "./assets/music/mahiye.mp3",
  },
  {
    backgroundImage: "./assets/images/minni.jpg",
    posterUrl: "./assets/images/minni.jpg",
    title: "Minni Minni",
    album: "June",
    year: 2018,
    artist: "Ifthi, Amritha Suresh",
    musicPath: "./assets/music/Minni-Minni.mp3",
  },
  {
    backgroundImage: "./assets/images/ktmbk.jpg",
    posterUrl: "./assets/images/ktmbk.jpg",
    title: "KTMBK",
    album: "Genesis 1:1",
    year: 20,
    artist: "Zaeden",
    musicPath: "./assets/music/KTMBK.mp3",
  },
  {
    backgroundImage: "./assets/images/baarishein.jpg",
    posterUrl: "./assets/images/baarishein.jpg",
    title: "Baarshein",
    album: "Baarishein",
    year: 2018,
    artist: "Anuv Jain",
    musicPath: "./assets/music/baarishein.mp3",
  },
  {
    backgroundImage: "./assets/images/makes-you.jpg",
    posterUrl: "./assets/images/makes-you.jpg",
    title: "What Makes You Beautiful",
    album: "Up All Night",
    year: 2011,
    artist: "One Direction",
    musicPath: "./assets/music/makes-you.mp3",
  },
  {
    backgroundImage: "./assets/images/blankspace.jpg",
    posterUrl: "./assets/images/blankspace.jpg",
    title: "Blank Space",
    album: "1989",
    year: 2014,
    artist: "Taylor Swift",
    musicPath: "./assets/music/blank-space.mp3",
  },
  {
    backgroundImage: "./assets/images/tum-se-hi.jpg",
    posterUrl: "./assets/images/tum-se-hi.jpg",
    title: "Tum Se Hi",
    album: "Jab We Met",
    year: 2007,
    artist: "Pritam",
    musicPath: "./assets/music/tum-se-hi.mp3",
  },
  {
    backgroundImage: "./assets/images/kabira.jpg",
    posterUrl: "./assets/images/kabira.jpg",
    title: "Kabira",
    album: "Yeh Jawaani Hai Deewani",
    year: 2013,
    artist: "Rekha Bhardwaj",
    musicPath: "./assets/music/kabira.mp3",
  },
  {
    backgroundImage: "./assets/images/subh.jpg",
    posterUrl: "./assets/images/subh.jpg",
    title: "Subhanallah",
    album: "Yeh Jawaani Hai Deewani",
    year: 2013,
    artist: "Sreerama Chandra, Shilpa Rao",
    musicPath: "./assets/music/subhanallah.mp3",
  },
  {
    backgroundImage: "./assets/images/kenk.jpg",
    posterUrl: "./assets/images/kenk.jpg",
    title: "Kadhal En Kaviye",
    album: "Salmon 3D",
    year: 2021,
    artist: "Sid Sriram",
    musicPath: "./assets/music/k-en-k.mp3",
  },
  {
    backgroundImage: "./assets/images/chellakutti.jpg",
    posterUrl: "./assets/images/chellakutti.jpg",
    title: "Chellakuttiye",
    album: "Chellakuttiye",
    year: 2020,
    artist: "Jecin George, Pearle Maaney",
    musicPath: "./assets/music/chellakutti.mp3",
  },
  {
    backgroundImage: "./assets/images/yma.jpg",
    posterUrl: "./assets/images/yma.jpg",
    title: "Yennai Maatrum Kaadhale",
    album: "Naanum Rowdy Dhaan",
    year: 2015,
    artist: "Anirudh Ravichander",
    musicPath: "./assets/music/yennai-maatrum.mp3",
  },
  {
    backgroundImage: "./assets/images/aise-kyun.jpg",
    posterUrl: "./assets/images/aise-kyun.jpg",
    title: "Aise Kyun",
    album: "Mismatched: Season 2",
    year: 2022,
    artist: "Anurag Saiki",
    musicPath: "./assets/music/aise-kyun.mp3",
  },
  {
    backgroundImage: "./assets/images/ap.jpg",
    posterUrl: "./assets/images/ap.jpg",
    title: "With You",
    album: "First of a Kind",
    year: 2023,
    artist: "AP Dhillon",
    musicPath: "./assets/music/withu.mp3",
  },
  {
    backgroundImage: "./assets/images/siri.jpg",
    posterUrl: "./assets/images/siri.jpg",
    title: "Sirikkadhey",
    album: "Remo",
    year: 2016,
    artist: "Anirudh Ravichander",
    musicPath: "./assets/music/Sirikkadhey.mp3",
  },
  {
    backgroundImage: "./assets/images/alli.jpg",
    posterUrl: "./assets/images/alli.jpg",
    title: "Alli Pookal",
    album: "Alli Pookal",
    year: 2021,
    artist: "Stephen Zechariah",
    musicPath: "./assets/music/Alli.mp3",
  },
];

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${
      i === 0 ? "playing" : ""
    }" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${
    musicData[i].title
  } Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
};

addEventOnElements(playlistTogglers, "click", togglePlaylist);

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
};

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute(
    "alt",
    `${musicData[currentMusic].title} Album Poster`
  );
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
};

addEventOnElements(playlistItems, "click", changePlayerInfo);

const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - minutes * 60);
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
};

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
};

audioSource.addEventListener("loadeddata", updateDuration);

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
};

playBtn.addEventListener("click", playMusic);

const playerRunningTime = document.querySelector("[data-running-time");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
};

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
};

addEventOnElements(ranges, "input", updateRangeFill);

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
};

playerSeekRange.addEventListener("input", seek);

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();
  }
};

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? (currentMusic = 0) : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
};

playerSkipNextBtn.addEventListener("click", skipNext);

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? (currentMusic = musicData.length - 1) : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
};

playerSkipPrevBtn.addEventListener("click", skipPrev);

const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => (currentMusic = getRandomMusic());

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
};

playerShuffleBtn.addEventListener("click", shuffle);

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
};

playerRepeatBtn.addEventListener("click", repeat);

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
};

playerVolumeRange.addEventListener("input", changeVolume);

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
};

playerVolumeBtn.addEventListener("click", muteVolume);
