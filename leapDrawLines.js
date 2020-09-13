//four global variable for max/min width and innerHeight
var rawXMin = window.innerWidth * 0.1;
var rawXMax = window.innerWidth * 0.9;
var rawYMin = window.innerHeight * 0.1;
var rawYMax = window.innerHeight * 0.9;

control.log(rawXMax);
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
      circle((finger.tipPosition[0]-rawXMin)/(rawXMax - rawXMin),(-finger.tipPosition[1]-rawYMin)/(rawYMax-rawYMin),50);
}

//infinity loop
Leap.loop(controllerOptions, function(frame){

 HandleFrame(frame);



}

);
