let button = document.querySelector("button");
let main = document.querySelector(".main");
let timer = document.querySelector("#timer");
let scoreElem = document.querySelector("#score");
let overlayElem = document.querySelector(".overlay");
let overlayTime = document.querySelector("#overlay-time");
let overlayScore = document.querySelector("#overlay-score");
let overlayTimeout = document.querySelector("#overlay-timeout");

const GAME_DURATION = 5;
const OVERLAY_DURATION = 3;
let interval;
let score = 0;
let canScore = false;

let overlayScreen;

let box = document.createElement("div");
box.classList.add("box");

let randomBox = () => {
  main.append(box);
  box.style.display = "block";
  canScore = true;

  let mainW = main.clientWidth - box.offsetWidth;
  let mainH = main.clientHeight - box.offsetHeight;

  let moveX = Math.random() * mainW;
  let moveY = Math.random() * mainH;

  box.style.top = `${moveY}px`;
  box.style.left = `${moveX}px`;
  box.style.backgroundColor = randomColor();
};
let randomColor = () => {
  let r = Math.floor(Math.random() * 250);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};
let endGame = (time) => {
  overlayElem.style.display = "block";
  overlayTime.textContent = time - 1;

  overlayScore.textContent = score;

  clearInterval(interval);
  time = 0;
  score = 0;
  timer.textContent = time;
  scoreElem.textContent = score;
  box.style.display = "none";

  clearInterval(overlayScreen);

  let timeout = OVERLAY_DURATION;
  overlayTimeout.textContent = timeout;
  overlayScreen = setInterval(() => {
    timeout--;
    overlayTimeout.textContent = timeout;

    if (timeout < 0) {
      overlayElem.style.display = "none";
      clearInterval(overlayScreen);
      button.disabled = false;
    }
  }, 1000);
};

button.addEventListener("click", () => {
  button.disabled = true;
  let time = 0;
  score = 0;
  timer.textContent = time;
  scoreElem.textContent = score;

  clearInterval(interval);

  box.style.display = "block";

  interval = setInterval(() => {
    time += 1;
    timer.textContent = time;

    randomBox();
    if (time === GAME_DURATION + 1) {
      endGame(time);
    }
  }, 1000);
});

box.addEventListener("click", () => {
  if (canScore) {
    score += 1;
    scoreElem.textContent = score;
    box.style.display = "none";
    canScore = false;
  }
});
