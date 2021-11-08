var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
var lastPressed = false;
var changeableX = 300;
var changeableY = 20;
class Character {
  constructor() {
    this.width = 10;
    this.height = 40;
    this.x = 200;
    this.y = canvas4.height - this.height - 40;
    this.frameX = 0;
    this.frameY = 0;
  }

  update() {
    if (upPressed) {
      //up
      if (this.y > canvas4.height - this.height * 2.5) {
        this.y -= 1;
      }
    }
    if (downPressed) {
      //down
      if (this.y < canvas4.height - this.height * 1.05) {
        this.y += 1;
      }
    }
    if (leftPressed) {
      //left
      if (this.x > this.width) {
        this.x -= 1;
      }
    }
    if (rightPressed) {
      //right
      if (this.x < canvas4.width - this.width * 2) {
        this.x += 1;
      }
    }
    if (this.y < 0) scored();
  }
  draw() {
    // ctx4.fillStyle = "black";
    // ctx4.fillRect(this.x, this.y, this.width, this.height);
    ctx4.drawImage(playerSprite, this.x, this.y, 12, 30);
  }
}
document.addEventListener("keyup", function (event) {
  if (event.keyCode == 37) {
    leftPressed = false;
    lastPressed = "left";
  }
  if (event.keyCode == 39) {
    rightPressed = false;
    lastPressed = "right";
  }
  if (event.keyCode == 38) {
    upPressed = false;
    lastPressed = "up";
  }
  if (event.keyCode == 40) {
    downPressed = false;
    lastPressed = "down";
  }
});

document.addEventListener("keydown", function (event) {
  if (event.keyCode == 37) {
    leftPressed = true;
  }
  if (event.keyCode == 39) {
    rightPressed = true;
  }
  if (event.keyCode == 38) {
    upPressed = true;
  }
  if (event.keyCode == 40) {
    downPressed = true;
  }
});

const character = new Character();
