var controllerOptions = {};
var i = 0;
var x = window.innerWidth * 0.5;
var y = window.innerHeight * 0.5;
Leap.loop(controllerOptions, function(frame)
{
  //clear();
  //var randx = (Math.random()*3)-1;
  //var randy = (Math.random()*3)-1;
  //console.log(i);
  //i++;
  //circle(x+randx,y+randy,50);
  //console.log(frame);
  for(var h = 0; h < frame.hands.length; h++){
    var hand = frame.hands[h];
  }
  var hand = frame.hands[0];
  var fingers = hand.fingers;
  if(frame.hands.length == 1)
  {
    console.log(fingers);
    //to acces the first element in the hands array
  }
  
 


}
);
