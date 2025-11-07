let Cat;

function preload(){
Cat = loadImage("Cat_gif.GIF");
}

function setup() 
{
     image (Cat, width/2, height/2);
	createCanvas(windowWidth,windowHeight);
    background("gray");
    //loadImage("Cat_gif.GIF");
}

function draw()
{
 //image (Cat, width/2, height/2);
}
