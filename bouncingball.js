var x = 200;
var y = 200;
var speedx = 20;
var speedy = 15;
var h = 50;
var w = 50;
var pX = 40;
var pW = 30;
var pH = 120;

var rectX = 40;
var rectY = 400;
var rectW = 30;
var rectH = 120;

var totalMissed = 0;
var totalHit = 0;
var win = 0;
var lose = 0;

var easy = document.querySelector('#easy');
var medium = document.querySelector('#medium');
var hard = document.querySelector('#hard');

easy.addEventListener('click', function() {
          rectH = 200;
});
medium.addEventListener('click', function() {
          rectH = 100;
});
hard.addEventListener('click', function() {
          rectH = 55;
});


function setup() {
          // CREATE THE CANVAS
          createCanvas(1800,800);
          // SET ANGLE MODE TO DEGREES
          angleMode(DEGREES);
}
function draw() {
          // SET CANVAS BACKGROUND
          background(100,180,150);

          push();
          textSize(50);
          fill(255,0,0);
          stroke(0);
          text('TOTAL MISSED : ' + totalMissed, width/2, height-height+100);
          text("TOTAL HIT : " + totalHit, width/2, height-100);
          pop();
          push();
          fill(255,0,0);
          stroke(100,180,150);
          text("Wins : " + win, 20, 20);
          text("Loses : " + lose, 20, 40);
          pop();
          stroke(255);
          strokeWeight(8);
          fill(0,0,255);
          ellipse(x,y,w,h);
          if(x > width-w/2-pW-pW/2) {
                    // println("OFF THE SCREEN!");
                    speedx = -speedx;
                    y = y + speedy;
                    x = width-100;
          }
          if(x < width-width+w/2+rectX/2-10) {
                    speedx = -speedx;
                    y = y + speedy;
                    x = 600;
                    totalMissed++;
          }
          if(y > height-h/2) {
                    speedy = -speedy;
          }
          if(y < height-height+h/2) {
                    speedy = -speedy;
          }

          y = y + speedy;
          x = x + speedx;

          push();
          stroke(255,0,0);
          fill(255);
          rectMode(CENTER);
          rect(rectX, mouseY, rectW, rectH);
          rect(width-pX, y, pW, pH);
          if(mouseY > height) {
                    //alert('hi');
                    mouseY = height-rectH/2;
          }

          if(x - w/2 < rectX + rectW/2 && y - h/2 < mouseY + rectH/2 && y + h/2 > mouseY - rectH/2) {
                    speedx = -speedx;
                    x = x+5;
                    totalHit = totalHit+1;
          }
          if(x < width-width) {
                    speedx = -speedx;
                    x = width;
          }
          pop();
          if(totalMissed == 10 || totalMissed == 11) {
                    totalMissed=0;
                    totalHit=0;

                    lose = lose + 1;
          }
          if(totalHit == 10 || totalHit == 11) {
                    totalHit=0;
                    totalMissed=0;

                    win = win + 1;
          }

}

var framesPerSecond = 30;
document.addEventListener('keydown', function(event) {
          if(event.keyCode == 40) {
                    //alert('hi');
                    speedy = speedy;
          }
          if(event.keyCode == 38) {
                    speedy = -speedy;
          }
          if(event.keyCode == 37) {
                    speedx = -speedx;
          }
          if(event.keyCode == 39) {
                    speedx = speedx;
          }
          if(event.keyCode == 87) {
                    rectY = rectY-35;
          }
          if(event.keyCode == 83) {
                    rectY = rectY+35;
          }
          if(event.keyCode == 65) {
                    rectX = rectX-20;
          }
          if(event.keyCode == 68) {
                    rectX = rectX+20;
          }
}, 1000/framesPerSecond );
