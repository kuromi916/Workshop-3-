let Cat;
let BG; 
let rect1;
let rect2; 
let circle1;
let circle2;
let endScreen;
let button;

let hitX = 320;
let hitWidth = 50;


let sizeX = 10; 
//starts at 10 min, sizeX cannot be > 105, SizeX cannot be < 10
let sizeY = 10;// tried this but it didn't work lol
 


let missOptions= ["Try again!"|| "Missed"|| 'So Close!'||'Tough luck...'|| 'Need More Practice?'||'Almost there!' ];
let choice; 


let twoMinutes = 120000;

let isCurrentlyTouching = false;

//To - DO:
                        // 1) start screen (see egg project, last year)
                        // 2) restart screen - take when person doesn't beat it
                       // 3) the colour changing clock thing - as the person gets more hits the more the red ciorcle turns to green
                      // 4) timer - once the timer ends, take you to end screen
                      // 5) if the clock fully turns green, takes to celebration screen

function preload(){
Cat = loadImage("Cat2.GIF");  
BG = loadImage ("Background.PNG");
endScreen = loadImage ("Start_BG.PNG");
}

//-------------------------------------

function setup()
{
	createCanvas(1100,2000);
  imageMode(CENTER);
  collideDebug(true);
  lockGestures();
  showDebug();
}

//--------------------------------------


var hit = false;
var noHit = false; 

function draw(){
 
let countdown = 120-floor(millis()/1000); 
//let countdown = 10-floor(millis()/1000); // testing time 
let choice = random(missOptions);
let angle = frameCount * 0.01;

if (countdown <=0){
  countdown = 0;
}



background(255) ;
image(BG,width/2,height/2,1100,2000);  
image(Cat,800,700,600,800);

fill("red");
circle1 = circle(775,780,105,105);

fill("orange");
circle(775,780,50,50);

fill("green");
circle2 = circle (775,780,sizeX,sizeY);

fill('black');
rect(773,735, 4, 50);


textSize(45);
textStyle("italic");
fill("white");
text(countdown, 420,1325);


fill("orange");
rect1 = rect(305, 1400, 310, 50); //x, y , rectangle size


fill("green");
rect2 = rect(hitX,1400, hitWidth,50);
// green rectangle - hit space 

   let x = 155 * sin(frameCount * 0.03) + 460;
   let y = 1400;

  fill("black");
  rect3 = rect( x,y,3,50);

hit = collideLineRect(x,y, 3,50,   hitX,     1400,   hitWidth,   50,);
  stroke(hit ? color('red') : 0);


noHit = collideLineRect (x,y, 3,50, 305, 1400, 310, 50 )
//                                    hitX     y position , Thickness,


if (noHit === true && isCurrentlyTouching === true ){

    hit === false;
    isCurrentlyTouching === false;
    textSize(40);
    fill("white");
    text(choice, 700, 1400);
    debug('try again!');  
  }
  
  if(hit === true && isCurrentlyTouching === true ){
 
    hitX = random(305,500);
    hitWidth = random(20,50);
    
    isCurrentlyTouching = false;
    
    fill("white");
    text("Nice!", 700, 1400);
  
    if (sizeX >= 10 && sizeX <= 105 && sizeY >=10 && sizeY <=105){
       sizeX += 3;
       sizeY += 3;
    }
   
    debug('Nice!');

    
  }else{hit === false && isCurrentlyTouching===false }

  if(sizeX >105 || sizeY> 105){
      sizeX = 105;
      sizeY = 105;
    }
  
   if (sizeX < 10 || sizeY < 10){
    sizeX = 10;
    sizeY = 10;
    }

push(); 
translate(775,781);
rotate(angle);
fill('black');
rect( 0,0, 4, 35);
pop();

if (countdown === 0 ){
  
  window.location.href = "index(end_page_lose).html";
  
 }

//  if (countdown === 0 && sizeX === 105 && sizeY === 105){
//    window.location.href = "index(end_page_win).html;";
//  }

 if(sizeX === 105 && sizeY === 105 && countdown >= 0){
  window.location.href = "index(end_page_win).html";
 }

}
  function touchStarted(){ 
    isCurrentlyTouching = true;
   
   }