let Cat;
let BG; 


function preload(){
Cat = loadImage("Cat2.GIF");
BG = loadImage ("Back_Ground.PNG");
}

function setup() 
{
    
	createCanvas(windowWidth,windowHeight);
   
   // lockGestures();
   imageMode(CENTER);
}

function draw()
{
 background(255) ;
  image(BG,width/5,height/2,600,windowHeight);  
 image(Cat,width/4.5,height/3.5,500,700);

}
