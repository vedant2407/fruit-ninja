//Game States
var PLAY=1;
var END=0;
var gameState=1;

var knife;
var knifeImage ;


function preload(){
  
  knifeImage = loadImage("knife.png");
}



function setup() {
  createCanvas(600, 600);
  
  //creating sword
   knife=createSprite(40,200,20,20);
   knife.addImage(knifeImage);
   knife.scale=0.7
  
  
  //set collider for sword
  knife.setCollider("rectangle",0,0,40,40);

  score=0;
  //create fruit and monster Group variable here
}

function draw() {
  background("lightblue");
  
  if(gameState===PLAY){
    
    //calling fruit and monster function
    
    // Move knife with mouse
    knife.y=World.mouseY;
    knife.x=World.mouseX;
  
    // Increase score if knife touching fruit
   
    // Go to end state if knife touching enemy
      
  }
  
  drawSprites();
  
  //Display score
  textSize(25);
  text("Score : "+ score,250,50);
}
