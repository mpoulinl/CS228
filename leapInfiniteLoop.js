var controllerOptions = {};
var i = 0;
var x = window.innerWidth * 0.5;
var y = window.innerHeight * 0.5;
Leap.loop(controllerOptions, function(frame)
{
  clear();
  var rand = (Math.random()*3)-1;
  console.log(i);
  i++;
  circle(x+rand,y,50);
  


}
);
