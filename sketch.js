var movingRect, fixedRect;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400, 200, 80, 20);
  fixedRect = createSprite(400,100,50,50);
  movingRect.shapeColor = "turquoise";
  fixedRect.shapeColor = "turquoise";
  movingRect.debug = true;
  fixedRect.debug  = true;
}

function draw() {
  background(0); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 && 
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor = "midnightblue";
    fixedRect.shapeColor = "midnightblue";
  } 
  else{
    movingRect.shapeColor = "turquoise";
    fixedRect.shapeColor = "turquoise";
  }

  drawSprites();
}