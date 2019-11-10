var snake;
var enemySnake1,enemySnake2,enemySnake3,enemySnake4;
function preload() {
 
}

function setup(){
    var canvas = createCanvas(1200,400);
  snake=createSprite(50,50,100,10); 


} 

function draw(){
     background(0);
  snake.x=world.mouseX+20;
  snake.x=world.mouseY+20;
  drawSprites();
}
function spawnSnakes(){
if (world.frameCount%80===0){
enemySnake1=createSprite(1200,380,100,10);
enemySnake2=createSprite(1200,20,100,10);
enemySnake3=createSprite(1180,380,100,10);
enemySnake4=createSprite(1200,380,100,10);
}
}