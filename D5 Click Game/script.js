let button = document.querySelector("button");
let main = document.querySelector(".main");
let timer = document.querySelector("#timer");

let box = document.createElement("div");
box.classList.add("box");

let interval;
let time = 0;

let randomBox = () => {
  main.append(box);
  
  let mainW = main.clientWidth - box.offsetWidth
  let mainH = main.clientHeight - box.offsetHeight

  let moveX = Math.random() * mainW;
  console.log(moveX);
  let moveY = Math.random() * mainH;
  console.log(moveY);

  box.style.top = `${moveY}px`;
  box.style.left = `${moveX}px`;
  box.style.backgroundColor = randomColor();
};
let randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

button.addEventListener("click", () => {
  clearInterval(interval);

  interval = setInterval(() => {
    time += 1;
    timer.textContent = time;
    randomBox();
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
    box.style.display = "none"
    time = 0;
    timer.textContent = time;
  }, 5000);
});
