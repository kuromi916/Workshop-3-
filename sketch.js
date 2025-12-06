let Cat;
let BG; 
let rect1;
let rect2; 

let hitX = 250;
let hitWidth = 50;
let twoMinutes = 120000;
let newTarget = false;

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
}

var hit = false;

function draw(){
 
 let countdown = 120-floor(millis()/1000); 

background(255) ;
image(BG,width/2,height/2,1100,2000);  
image(Cat,800,700,700,900);


text(countdown,width/2,height/2);

//------------Level 1 --------------//
fill("orange");
rect1 = rect(280, 1100, 120, 50); //x, y , rectangle size

// red rectangle base - negative space

fill("green");
rect2 = rect(hitX, 1100, hitWidth, 50);
// green rectangle - hit space 

  // Calculate the coordinates.
  
  let x = 280 * sin(frameCount * 0.05) + 233;
  let y = 1450;

  // Draw the oscillator.
  //line(50, y, x, y);
  fill("black");
  rect( x,y,3,20);
//===================================//


/*-----------Level 2 ---------------//
fill("red");
rect(170, 440, 120, 20);

fill("green");
rect(230,440, 10,20);

let a = 60 * sin(frameCount * 0.05) + 230;
let b = 440;

  // Draw the oscillator.
  //line(50, y, x, y);
  fill("black");
  rect( a,b,3,20);

 //=================================*/
  
 // Use vectors as input:
    // const mouse      = createVector(mouseX, mouseY);
    // const p2         = createVector(350, 50);
    // const rect_start = createVector(200, 300);
    // const rect_size  = createVector(100, 150);
    // hit = collideLineRectVector(mouse, p2, rect_start, rect_size);

  hit1 = collideLineRect(x,y, 350, 50, 230, 530, 50, 20);
  
  if(hit1 === true && newTarget === true){
 
    hitX = random(280,1100);
    hitWidth = random(5,50);
    newTarget = false;
/*    
fill("red");
rect(170, 440, 120, 20);

fill("green");
rect(230,440, 10,20);

let a = 60 * sin(frameCount * 0.05) + 230;
let b = 440;

  // Draw the oscillator.
  //line(50, y, x, y);
  fill("black");
  rect( a,b,3,20);
    //stroke(hit1 ? color('blue') : 0);
    print('colliding?', hit1);
 */   
}

   
    
  }
    
    
function mouseReleased()
{
  newTarget = true;
}

