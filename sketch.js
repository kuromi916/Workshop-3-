let Cat;



function preload(){
Cat = loadImage("Cat.JPG");
}

function setup() 
{
    
	createCanvas(windowWidth,windowHeight);
    background("gray");
   // lockGestures();
}

function draw()
{
 image(Cat, 100,5,500,800);
}
