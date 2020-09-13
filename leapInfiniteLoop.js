var controllerOptions = {};
var i = 0;

//function
function HandleFrame(frame){
 clear();

  //one hand over the device
  if(frame.hands.length == 1){
    
    // first element in the hands
    var hand = frame.hands[0];
    HandleHand(hand);
     
}

function HandleHand(hand){
   //fingers element
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
          circle(fingers[n].tipPosition[0]+(window.innerWidth * 0.5),fingers[n].tipPosition[1]+(window.innerHeight * 0.5),50);
        }
        
      }
       
    }
  } 
 
}
function HandleFinger(Hand){
 
}

//infinity loop
Leap.loop(controllerOptions, function(frame)
{
 
 HandleFrame(frame); 
 


}
          
);
