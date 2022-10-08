var a;
function setup() {
  createCanvas(400,400);
  a=createSprite(200, 200, 10, 10);
}

function draw() 
{
  background(30);
drawSprites();

if(keyIsDown(UP_ARROW)){
  background("red")
  
  a.y=a.y-2
}
}




