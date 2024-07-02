let strtAIBtn = document.querySelector(".strtAIBtn");
let strtTwoPlayerBtn = document.querySelector(".strtTwoPlayerBtn");
let closePageBtn = document.querySelector(".closePageBtn");
let musicBtn = document.querySelector(".musicBtn");

let menuContainer = document.querySelector(".menuContainer");
let gameContainer = document.querySelector(".gameContainer");
let gamePlaySection = document.querySelector(".gamePlaySection");
let countDownSection = document.querySelector(".countDown");
let countDownText = document.querySelector(".countDownText");

let winnerAnnouncement = document.querySelector(".winnerAnnouncement");

let firstPlayerScore = document.querySelector(".firstPlayerScore");
let secondPlayerScore = document.querySelector(".secondPlayerScore");

let firstHand = document.querySelector(".firstHand");
let secondHand = document.querySelector(".secondHand");


// sounds
let mainMusic = new Audio("./assets/audio/mainTheme.m4a");
let MatchMusic = new Audio("./assets/audio/matchFound.m4a");
let victorySound = new Audio("./assets/audio/victory.mp3");
let loseSound = new Audio("./assets/audio/lose.m4a");
let drawSound = new Audio("./assets/audio/draw.m4a");


// variables
let firstScore = 0;
let secondScore = 0;
let vsAI = true;
let musicMuted = true;

