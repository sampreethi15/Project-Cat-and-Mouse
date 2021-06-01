var bgImg;
var cat;
var mouse;
function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    catImg1 = loadAnimation("cat1.png");
    mouseImg1 = loadAnimation("mouse1.png");
    catImg2 = loadAnimation("cat2.png");
    mouseImg2 = loadAnimation("mouse3.png");
    catImg3 = loadAnimation("cat4.png");
    mouseImg3 = loadAnimation("mouse2.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat =  createSprite(800, 600);
cat.addAnimation("cat_sitting", catImg1);
cat.scale = 0.25;
cat.addAnimation("cat_happy", catImg3);

mouse = createSprite(200, 600);
mouse.addAnimation("mouse_sitting", mouseImg1);
mouse.scale = 0.25;
mouse.addAnimation("mouse_happy", mouseImg3);
//mouse.setCollider("circle", 0, 0, 400);
//mouse.debug = true;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width - mouse.width)/2){
cat.velocityX = 0;
cat.x = 400;
cat.changeAnimation("cat_happy", catImg3);
mouse.changeAnimation("mouse_happy", mouseImg3);
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyDown(LEFT_ARROW)){
cat.velocityX = -2;    
cat.addAnimation("cat_running", catImg2);
cat.changeAnimation("cat_running", catImg2);
mouse.addAnimation("mouse_teasing", mouseImg2);
mouse.changeAnimation("mouse_teasing", mouseImg2);
}

}
