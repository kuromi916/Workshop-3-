
let start; 
//let startCat;


function setup()
{
	createCanvas(1100,2000);
  imageMode(CENTER);
  collideDebug(true);
  lockGestures();
  showDebug();
}

function preload(){
start = loadImage("Start_BG.PNG"); 
////let startCat = loadImage("");

}

function draw(){

background(500);
image(start,width/2,height/2,1100,2000);  
//image(start_cat,800,700,600,800);

}