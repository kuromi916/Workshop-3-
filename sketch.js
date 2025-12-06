let Cat;
let BG; 
let rect1;
let rect2; 

let hitX = 320;
let hitWidth = 50;

// let hitX = 320;
// let hitWidth = 100;
let twoMinutes = 120000;

let isCurrentlyTouching = false;


function preload(){
Cat = loadImage("Cat2.GIF");
BG = loadImage ("Background.PNG");
}
function setup()
{
	createCanvas(1100,2000);
  imageMode(CENTER);
  collideDebug(true);
  lockGestures();
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


fill("green");
rect2 = rect(hitX,1400, hitWidth,50);
// green rectangle - hit space 

  

   let x = 180 * sin(frameCount * 0.05) + 455;
    //  -180 = not work

  let y = 1400;
  
  // let x = 155 * sin(frameCount * 0.08) + 450;//240
  // let y = 1400;


  fill("black");
  rect( x,y,3,50);

hit1 = collideLineRect(x,y, 300, 150,   230,     1400,      50,          10);
//                                    hitX     y position , Thickness,
  
  if(hit1 === true && isCurrentlyTouching === true){
 
    hitX = random(305,580);
    hitWidth = random(5,50);
    isCurrentlyTouching = false;
    
  }
  if(hit === false){
    isCurrentlyTouching === false;
  }
}
/*    
old versions: 
  //hit = collideLineRectVector(x,y,350,50,320,1400,100,50);                     
  //if(hit === true ){//&& touchStarted === true)//
   //hitX = random(305,1400);
   //hitWidth = random(5,50);
  debug("Yes!");

  }*/
  function touchStarted(){ //mouse will not work when active
    isCurrentlyTouching = true;
   debug("Yay!")}