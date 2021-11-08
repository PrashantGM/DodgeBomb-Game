class Bomb {
  constructor(x, y, width, height, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
  }
  draw() {
    ctx3.drawImage(
      bombImg,
      96.7,
      421,
      10,
      31,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  update() {
    this.y += this.speed * gameSpeed;
    if (this.y > Math.random() * 50 + 500) {
      ctx5.drawImage(
        shortExplosion,
        2,
        30,
        30,
        50,
        this.x - 12,
        this.y,
        30,
        50
      );
      this.y = Math.random() * 200 + 10;
      this.x = Math.random() * 700 + 10;
    }
  }
}
function initBombs() {
  for (let j = 0; j < 10 * bombCount; j++) {
    let bombx = Math.random() * 800 + 10;
    let bomby = Math.random() * 200 + 10;
    bombsArray.push(new Bomb(bombx, bomby, 8, 31, 2));
  }
}

initBombs();
function handleBombs() {
  for (let i = 0; i < bombsArray.length; i++) {
    bombsArray[i].update();
    bombsArray[i].draw();
    for (let i = 0; i < bombsArray.length; i++) {
      if (bombsArray[i].y > 520) {
        bombsArray.splice(i, 1);
      }
    }
    for (let i = 0; i < bombsArray.length; i++) {
      if (collision(character, bombsArray[i])) {
        console.log("collide");
        ctx5.drawImage(
          shortExplosion,
          2,
          30,
          30,
          50,
          character.x,
          character.y,
          30,
          50
        );
        let health = document.getElementById("health");
        if (health.children.length === 3) {
          health.removeChild(health.children[0]);
        } else if (health.children.length === 2) {
          health.removeChild(health.children[0]);
        } else if (health.children.length === 1) {
          health.removeChild(health.children[0]);
          console.log(health.children.length);
        } else if (health.children.length === 0) {
          let gameover = document.getElementById("start");
          gameover.innerHTML = "Game Over";
          gameover.style.display = "block";
          let restart = document.getElementById("restart");
          restart.style.display = "block";
          gameOver();
        }
        resetGame();
      } else {
        scored();
      }
    }
  }
}
