const canvas1 = document.getElementById("canvas1");
const ctx1 = canvas1.getContext("2d");
canvas1.width = 600;
canvas1.height = 600;

const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");
canvas2.width = 600;
canvas2.height = 600;

const canvas3 = document.getElementById("canvas3");
const ctx3 = canvas3.getContext("2d");
canvas3.width = 600;
canvas3.height = 600;

const canvas4 = document.getElementById("canvas4");
const ctx4 = canvas4.getContext("2d");
canvas4.width = 600;
canvas4.height = 600;

const canvas5 = document.getElementById("canvas4");
const ctx5 = canvas5.getContext("2d");
canvas5.width = 600;
canvas5.height = 600;

//global variables
let score = 0;
let bombCount = 1;
let gameSpeed = 1;
let level = 1;
let explosion = false;
let pause = false;
const bombsArray = [];

//images
const bombImg = new Image();
bombImg.src = "images/sprites.png";

const grass = new Image();
grass.src = "images/bg.png";

const shortExplosion = new Image();
shortExplosion.src = "images/bomb1.png";

const playerSprite = new Image();
playerSprite.src = "images/brother1.png";
