var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;


var particels = [];
var particleAmount = 230;
var mousePoint = {
  x: 0,
  y: 0
}


document.addEventListener('mousemove',function(event){
  mousePoint.x = event.clientX;
  mousePoint.y = event.clientY;
});
 
for (var i = 0; i < particleAmount; i++) {
 
  particels.push( new Particle( 
    randomBetweenRanges({from:0, to:width/3}, {from:width-width/3, to:width}), 
    randomBetweenRanges({from:0, to:height/3}, {from:height-height/3, to:height}), 
    4) );
} 

function render() {
    
  draw();
  requestAnimationFrame(render);
}

render();

function shiftPoint(p) {
  
    TweenLite.to(p, randomBetween(5, 50), {
      x:p.x - 100 + Math.random()*200,
      y:p.y - 100 + Math.random()*200, ease:Elastic.easeOut.config(1, 0.3),
      onComplete: function() {
        shiftPoint(p);
      }});
}

for(var i in particels) {

  shiftPoint(particels[i]);
}

function draw() {
  
   context.clearRect(0, 0, width, height);
  
    for (var i = 0; i < particels.length; i++) {
      
      var particel = particels[i];
      
      context.beginPath();
      context.fillStyle = 'rgba(213, 221, 221, .7)';
      context.arc(particel.x, particel.y, particel.radius, 0, Math.PI*2, false);
      context.fill();
      context.closePath();
      
      for (var o = 0; o < particels.length; o++) {
        
        var relParticel = particels[o];    
       
        if( getDistance(particel.x, particel.y, relParticel.x, relParticel.y) < 80 ) {
            context.beginPath();
            context.moveTo(relParticel.x,relParticel.y);
            context.strokeStyle = 'rgba(213, 221, 221, .4)'; 
            context.lineTo(particel.x, particel.y);
            context.stroke();  
        }
       
      }
      
       if(getDistance(mousePoint.x, mousePoint.y,particel.x, particel.y) < 80) {
          
            context.beginPath();
            context.moveTo(particel.x, particel.y);
            context.strokeStyle = 'red';    
            context.lineTo(mousePoint.x,mousePoint.y);
             context.strokeStyle = 'rgba(213, 221, 221, .55)'; 
            context.stroke();  
          
          
          particel.radius = 5;
        } else {
           particel.radius = 4;
        }
    } 
}

function Particle(x, y, radius) {
  
  this.x = x;
  this.y = y;
  this.angle = 10;
  this.radius = radius ? radius : 5;
}

function getDistance(x1,y1,x2,y2) {
  
  return Math.sqrt( (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2) );
}

function randomBetween(min, max) {
  return (Math.floor(Math.random() * max) + min);
}

function randomBetweenRanges(range1, range2) {
  
  var numbers = [];
         numbers.push(randomBetween(range1.from,range1.to),randomBetween(range2.from,range2.to));
 
  return numbers[Math.floor(Math.random()*numbers.length)];
}