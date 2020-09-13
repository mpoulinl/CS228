var controllerOptions = {};
var i = 0;
var x = window.innerWidth * 0.5;
var y = window.innerHeight * 0.5;

//functions :
function HandleFrame(frame){
  clear();
  //var randx = (Math.random()*3)-1;
  //var randy = (Math.random()*3)-1;
  for(var h = 0; h < frame.hands.length; h++){
    var hand = frame.hands[h];
  }
  var hand = frame.hands[0];
  
  if(frame.hands.length == 1)
  {
    var fingers = hand.fingers;
    var arraylength = fingers.length;
    //iterrate
    for(var n = 0; n < arraylength; n++)
    {   
      if(fingers[n].length > 45.5)
      {
        if(fingers[n].length < 50)
        {
          console.log(fingers[n].tipPosition[0]);
          circle(fingers[n].tipPosition[0]+x,fingers[n].tipPosition[1]+y,50);
        }
        
      }
       
    }
}
}

Leap.loop(controllerOptions, function(frame){

    HandleFrame(frame);
  }
  
 


}
          
);
