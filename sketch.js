var movingRec,fixedRec;


function setup() {
  createCanvas(1200,600);
  fixedRec = createSprite(400, 0, 50, 80);
  fixedRec.shapeColor= "green";
  fixedRec.debug=true;
  
  movingRec = createSprite(400,600,80,50);
  movingRec.shapeColor="green";
  movingRec.debug=true;
  
  fixedRec.velocityY = 3;
  movingRec.velocityY = -3 ;
  
}

function draw() {

  background(0); 
  
 // movingRec.x=mouseX;
 // movingRec.y=mouseY;

  bounce(movingRec,fixedRec);
  
 


  console.log(movingRec.x-fixedRec.x);
  drawSprites();
}
