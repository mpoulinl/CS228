var controllerOptions = {};
var i = 0;
var x = window.innerWidth * 0.5;
var y = window.innerHeight * 0.5;
Leap.loop(controllerOptions, function(frame)
{
  console.log(i);
  i++;
  circle(x,y,50);


}
);
