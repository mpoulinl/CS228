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
    //iterrate each finger
    for(var n = 0; n < arraylength; n++)
    {
      //only show circle for index
      if(fingers[n].type == 1)
      {
          console.log(fingers[n].tipPosition[0]);
          circle(fingers[n].tipPosition[0]+(window.innerWidth * 0.5),fingers[n].tipPosition[1]+(window.innerHeight * 0.5),50);        
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
