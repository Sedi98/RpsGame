closePageBtn.addEventListener("click", () => {
  let confirmation = confirm("Are you sure you want to exit?");
  if (confirmation) {
    window.close();
  }
});

strtAIBtn.addEventListener("click", () => {
  let confirmation = confirm("Are you sure you want to play against AI?");
  if (confirmation) {
    startGame();
  }
});


strtTwoPlayerBtn.addEventListener("click", () => {
  alert("Coming Soon");
  
});

musicBtn.addEventListener("click", () => {
  let confirmation = confirm("Are you sure you want to play music?");
  if (confirmation) {
    musicPlay(mainMusic);
  }
});

function startGame() {
  menuContainer.style.display = "none";
  countDownSection.style.display = "flex";
  musicStop(mainMusic);
  musicPlay(MatchMusic);
  let intervalCount = 5;
  countDownText.innerHTML = intervalCount;
  let interval = setInterval(() => {
    countDownText.innerHTML = intervalCount;
    intervalCount--;
    if (intervalCount < 0) {
      clearInterval(interval);
      countDownSection.style.display = "none";
      gameContainer.style.display = "block";
      musicStop(MatchMusic);
    //   musicPlay(mainMusic);
    }
  }, 1000);

  vsAI = true;
}

function musicPlay(musicName) {
  musicName.play();
}

function musicStop(musicName) {
  musicName.pause();
  musicName.currentTime = 0;
}

function gameLogic(userNumber) {
    musicStop(victorySound)
  if (userNumber === 1) {
    firstHand.innerHTML = "✊";
  } else if (userNumber === 2) {
    firstHand.innerHTML = "🤚";
  } else {
    firstHand.innerHTML = "✌";
  }

  secondHand.innerHTML = "sfsdf";
  let randomNumber;

  if (vsAI) {
    randomNumber = Math.floor(Math.random() * 3) + 1;

    console.log(randomNumber);
    if (randomNumber === 1) {
      secondHand.innerHTML = "✊";
    } else if (randomNumber === 2) {
      secondHand.innerHTML = "🤚";
    } else {
      secondHand.innerHTML = "✌";
    }
  }

  if (userNumber === randomNumber) {
    winnerAnnouncement.innerHTML = "Round Draw!";
  } else if (userNumber === 1 && randomNumber === 2) {
    winnerAnnouncement.innerHTML = "AI wins!";
    secondScore++;
    secondPlayerScore.innerHTML = secondScore;
    musicPlay(loseSound)
  } else if (userNumber === 2 && randomNumber === 3) {
    winnerAnnouncement.innerHTML = "AI wins!";
    secondScore++;
    secondPlayerScore.innerHTML = secondScore;
    musicPlay(loseSound)
  } else if (userNumber === 3 && randomNumber === 1) {
    winnerAnnouncement.innerHTML = "AI wins!";
    secondScore++;
    secondPlayerScore.innerHTML = secondScore;
    musicPlay(loseSound)
  } else {
    winnerAnnouncement.innerHTML = "You win!";
    firstScore++;
    firstPlayerScore.innerHTML = firstScore;
    musicPlay(victorySound)
    
  }
}
