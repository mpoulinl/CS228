
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

}

function HandleHand(hand){
   //fingers element
    var fingers = hand.fingers;
    //iterrate each finger
    for(var n = 0; n < fingers.length; n++){
      //if index extended
      if(fingers[n].type == 1 && fingers[n].extended){
        HandleFinger(fingers[n])
      }
    }
  }

function HandleFinger(finger){
  //only show circle for index
      console.log(finger.tipPosition);
      circle(finger.tipPosition[0]+(window.innerWidth * 0.5),finger.tipPosition[2],50);
}

//infinity loop
Leap.loop(controllerOptions, function(frame){

 HandleFrame(frame);



}

);
