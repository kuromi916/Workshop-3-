let Cat;
let BG; 
let rect1;
let rect2; 

let hitX = 305;
let hitWidth = 50;
let twoMinutes = 120000;
let touchStarted = false; 



function preload(){
Cat = loadImage("Cat2.GIF");
BG = loadImage ("Background.PNG");
}
function setup()
{
	createCanvas(1100,2000);
  imageMode(CENTER);
  collideDebug(true);
  //lockGestures();
  showDebug();
}

var hit = false;

function draw(){
 
let countdown = 120-floor(millis()/1000); 

background(255) ;
image(BG,width/2,height/2,1100,2000);  
image(Cat,800,700,700,900);


text(countdown,width/2,height/2);


fill("orange");
rect1 = rect(305, 1400, 310, 50); //x, y , rectangle size
// red rectangle base - negative space

fill("green");
rect2 = rect(hitX, 1400, hitWidth, 50);
// green rectangle - hit space 

  // Calculate the coordinates.
  
  let x = 155 * sin(frameCount * 0.08) + 450;//240
  let y = 1400;

  // Draw the oscillator.
  //line(50, y, x, y);
  fill("white");
  rect( x,y,4,50);

 
 // Use vectors as input:
    // const rect_start = createVector(200, 200);
    // const rect_size  = createVector(100, 150);
    // const mouse      = createVector(mouseX, mouseY);
    // const rect2_size = createVector(50, 75);
    // hit = collideRectRectVector(rect_start, rect_size, mouse, rect2_size);

  hit = collideRectRectVector(hitX,1400,305, hitWidth, x, y, 4, 50);
  //                           
  
  if(hit === true && touchStarted=== true){
 
    hitX = random(305,1400);
    hitWidth = random(5,50);
   
    debug("Yes!");
  
  if(touchStarted===true){
    debug("yes!");
    }

  }
}