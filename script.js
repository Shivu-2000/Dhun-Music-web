console.log("Welcome to Dhun");

//Variable initialization
let songIndex = 0;
let audioElement = new Audio("music/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let masterSongname = document.getElementById("masterSongname");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  { songName: " Army", filePath: "music/1.mp3", coverPath: "images/1.jpg" },
  { songName: " Closer", filePath: "music/2.mp3", coverPath: "images/2.jpg" },
  { songName: " Hamdard", filePath: "music/3.mp3", coverPath: "images/3.jpg" },
  { songName: " Meri Maa", filePath: "music/4.mp3", coverPath: "images/4.jpg" },
  { songName: " Believer", filePath: "music/1.mp3", coverPath: "images/5.jpg" },
  {
    songName: " Bhool Bhulaiya 2 Title track ",
    filePath: "music/2.mp3",
    coverPath: "images/6.jpg",
  },
  {
    songName: " Maiya Mainu",
    filePath: "music/3.mp3",
    coverPath: "images/7.jpg",
  },
  {
    songName: " Thoda Thoda Pyar",
    filePath: "music/4.mp3",
    coverPath: "images/8.jpg",
  },
  {
    songName: " Capital Letters",
    filePath: "music/1.mp3",
    coverPath: "images/9.jpg",
  },
  {
    songName: " Love me like You do",
    filePath: "music/2.mp3",
    coverPath: "images/10.jpg",
  },
];

songItem.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0],
    (innerText = songs[i].songName);
});

//Handle play and pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

//Listening to events
audioElement.addEventListener("timeupdate", () => {
  //progressbar update
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      // console.log(e.target);
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `music/${songIndex + 1}.mp3`;
      masterSongname.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex > 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `music/${songIndex + 1}.mp3`;
  masterSongname.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex < 0) {
    songIndex = 9;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `music/${songIndex + 1}.mp3`;
  masterSongname.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
