var sea;
var sea_1
var boat,boat_swimming;



function preload(){
boat_swimming=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
sea_1=loadImage("sea.png")

}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,10,10)
  sea.addImage("seeing",sea_1)
  sea.scale=0.3
  boat=createSprite (150,200,10,10)
boat.addAnimation("swimming",boat_swimming)
boat.scale=0.25
sea.velocityX=-3

}

function draw() {
  background("cyan");
 
  if(sea.x<-100){
    sea.x=sea.x=500; 
   }


drawSprites()

}