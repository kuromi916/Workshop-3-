let Cat;
let BG; 
let rect1;
let rect2; 

let hitX = 305;
let hitWidth = 50;
let twoMinutes = 120000;

let isCurrentlyTouching = false;  // NEEDED - Track if screen is being touched
let touchCounter = 0;             // NEEDED - Count total number of touches
let touchStartTime = 0; // When current touch started (milliseconds)
let touchDuration = 1; // How long current touch has been active (seconds)


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
 let touchDuration = (millis() - touchStartTime) / 1000;

background(255) ;
image(BG,width/2,height/2,1100,2000);  
image(Cat,800,700,700,900);


text(countdown,width/2,height/2);

//------------Level 1 --------------//
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
   // newTarget = false;
    touchEnded===true;
    //isCurrentlyTouching===false;
    debug("Yes!");
  
}

    function touchStarted() 
{
  isCurrentlyTouching = true;
  touchCounter = touchCounter + 1;
  touchStartTime = millis();
  //debug("Touch Count: " + touchCounter);  
  return false;  // Prevents default behavior
}

function touchEnded() 
{
    isCurrentlyTouching = false;
    // Output final touch duration to debug panel
    //debug("Touch Duration: " + touchDuration.toFixed(2) + " seconds");
    //debug("--- Touch Ended ---");
    return false;  // Prevents default behavior
}

  }
