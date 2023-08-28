console.log("Welcome to Spotify");
// Initialize the Variables

let songIndex = 0;
let audioElement = new Audio("songs2/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Yalgaar",
    filePath: "songs2/1.mp3",
    coverPath: "images2/1.jpeg",
  },
  {
    songName: "Living Hell",
    filePath: "songs2/2.mp3",
    coverPath: "images2/2.jpeg",
  },
  {
    songName: "Safar",
    filePath: "songs2/3.mp3",
    coverPath: "images2/3.jpeg",
  },
  {
    songName: "On my way",
    filePath: "songs2/4.mp3",
    coverPath: "images2/4.jpeg",
  },
  {
    songName: "What's Up Danger",
    filePath: "songs2/5.mp3",
    coverPath: "images2/5.jpeg",
  },
  {
    songName: "Am I Dreaming",
    filePath: "songs2/6.mp3",
    coverPath: "images2/6.jpeg",
  },
  {
    songName: "Never Say Never",
    filePath: "songs2/7.mp3",
    coverPath: "images2/7.jpeg",
  },
  {
    songName: "No Cap",
    filePath: "songs2/8.mp3",
    coverPath: "images2/8.jpeg",
  },
  {
    songName: "Starboy",
    filePath: "songs2/9.mp3",
    coverPath: "images2/9.jpg",
  },
  {
    songName: "Venom",
    filePath: "songs2/10.mp3",
    coverPath: "images2/10.jpeg",
  },
  {
    songName: "Vardaan",
    filePath: "songs2/11.mp3",
    coverPath: "images2/11.jpg",
  },
  {
    songName: "Faded",
    filePath: "songs2/12.mp3",
    coverPath: "images2/12.jpeg",
  },
];

songItems.forEach((element, i) => {
  // console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// audioElement.play()

// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
//Listen to Events
audioElement.addEventListener("timeupdate", () => {
  // console.log("timeupdate");
  //Update Seekbar

  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  // console.log(progress);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeALLPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      console.log(e.target);
      makeALLPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `songs2/${songIndex}.mp3`;
      masterSongName.innerText = songs[songIndex - 1].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songs >= 12) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs2/${songIndex}.mp3`;
  masterSongName.innerText = songs[songIndex - 1].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songs <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs2/${songIndex}.mp3`;
  masterSongName.innerText = songs[songIndex - 1].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
