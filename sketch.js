var road,jethalal,champaklal,chaibiscuit;
var roadImg,jethalalImg,champaklalImg,chaibiscuitImg ;
var chaibiscuitCollection = 0;
var chaibiscuitG , champaklalG ;

//Game States
var PLAY=1;
var END=0;
var gameState=1;


function preload(){
    roadImg = loadImage("road.jpg");
    jethalalImg = loadAnimation("jethalal");
    champaklalImg = loadImage("champaklal.jpg");
    chaibiscuitImg = loadImage("jethalal.jpg");
  }


  function setup(){
 //create the canvas and adjust the window sizes to suit the device 
    createCanvas(windowWidth,windowHeight)
    road=createSprite(width/2,200);
    road.addImage(roadImg);
    road.velocityY = 4;

 //creating boy running
    jethalal = createSprite(width/2,height-20,20,20);
    jethalal.addAnimation("JethalalRunning",jethalalImg);
    jethalal.scale=0.08;


    champaklalG=new Group();
    chaibiscuitG=new Group();
  
  }

  function draw() {

    if(gameState===PLAY){
    background(0);
    jethalal.x = World.mouseX;
    
    edges= createEdgeSprites();
    jethalal.collide(edges);
    
    //code to reset the background
    if(road.y > height){
       road.y = height/2
    }
      createChampaklal();
      createChaibiscuit();
      

    if (cchaibiscuitG.isTouching(jethalal)) {
        chaibiscuitG.destroyEach();
        chaibiscuitCollection=chaibiscuitCollection + 50;
    }

else{
    if(champaklal.isTouching(jethalal)) {
          gameState=END;
          
          jethalal.addAnimation("jethalalRunning");
          jethalal.x=width/2;
          jethalal.y=height/2;
          jethalal.scale=0.6;
          
          champaklalG.destroyEach();
          chaibiscuitG.destroyEach();
          
          champaklalG.setVelocityYEach(0);
          chaibiscuitG.setVelocityYEach(0);
    }
 }

 drawSprites();
  textSize(20);
  fill(255);
  text("champaklal:"+ chaibiscuitCollection,width-150,30);
  }

}


function createChampaklal() {
    if (World.frameCount % 410 == 0) {
      //   Modify the positions of champaklal to make them spawn throughout the available screen size.
  
      var champaklal = createSprite(Math.round(random(50, width-50),40, 10, 10));
      champaklal.addImage(champaklalImg);
    champaklal.scale=0.13;
    champaklal.velocityY = 5;
    champaklal.lifetime = 200;
    champaklalG.add(champaklal);
    }
  }

  function createChaibiscuit() {
    if (World.frameCount % 320 == 0) {
         // Modify the positions of chaibiscuit 
  
      var chaibiscuit = createSprite(Math.round(random(50, width-50),40, 10, 10));
      chaibiscuit.addImage(chaibiscuitImg);
    chaibiscuit.scale=0.03;
    chaibiscuit.velocityY = 5;
    chaibiscuit.lifetime = 200;
    chaibiscuitG.add(chaibiscuit);
  }
  }
