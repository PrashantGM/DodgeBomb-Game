ctx1.fillStyle = "skyblue";
ctx1.fillRect(0, 0, canvas1.width, canvas1.height);

function animate() {
  ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
  ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
  ctx4.clearRect(0, 0, canvas4.width, canvas4.height);
  ctx5.clearRect(0, 0, canvas5.width, canvas5.height);
  ctx1.fillStyle = "skyblue";
  ctx1.fillRect(0, 0, canvas1.width, canvas1.height - 100);
  ctx2.drawImage(
    grass,
    0,
    canvas2.height - 100,
    canvas2.width,
    canvas2.height - 100
  );

  handleBombs();
  handleScoreBoard();
  character.draw();
  character.update();

  if (pause) return;
  requestAnimationFrame(animate);
}

function handleScoreBoard() {
  ctx4.fillStyle = "black";
  ctx4.strokeStyle = "red";
  ctx4.font = "25px Verdana";
  ctx4.strokeText("Score", 265, 35);
  var reduceScore = score / 50;
  var roundOff = reduceScore.toFixed(0);
  ctx4.fillText(roundOff, 270, 65);

  ctx4.fillStyle = "black";
  ctx4.strokeStyle = "red";
  ctx4.font = "20px Helvetica";
  ctx4.strokeText("Level:", 20, 35);
  ctx4.fillText(level, 75, 35);
}

function scored() {
  score++;
  if (score % 20000 === 0) {
    gameSpeed += 0.5;
    level += 1;
    bombCount += 1;
  }
}
function collision(first, second) {
  return !(
    first.x > second.x + second.width + 10 ||
    first.x + first.width + 10 < second.x ||
    first.y > second.y + second.height + 10 ||
    first.y + first.height < second.y + 10
  );
}
function resetGame() {
  character.x = canvas4.width / 2 - character.width / 2;
  character.y = canvas4.height - character.height - 40;
}
function gameOver() {
  pause = true;
  gameSpeed = 1;
  bombCount = 1;
  document
    .getElementById("start")
    .removeEventListener("click", function (e) {});
  document
    .getElementById("restart")
    .removeEventListener("click", function (e) {});
}
function resetHealth() {
  for (let i = 0; i < 3; i++) {
    let ul = document.getElementById("health");
    let li = document.createElement("li");
    ul.appendChild(li);
  }
}
let restart = document.getElementById("restart");
restart.addEventListener("click", () => {
  pause = false;
  score = 0;
  resetHealth();
  animate();
  restart.style.display = "none";
  let gameOver = document.getElementById("start");
  gameOver.style.display = "none";
});
const startGame = document.getElementById("start");
startGame.addEventListener("click", () => {
  pause = false;
  animate();
  startGame.style.display = "none";
});
