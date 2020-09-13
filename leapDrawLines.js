//four global variable for max/min width and innerHeight
var rawXMin = 10000;
var rawXMax = -10000;
var rawYMin = 10000;
var rawYMax = -10000;


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
        HandleFinger(fingers[n])
    }
  }

function HandleFinger(finger){
  var horizontal = finger.tipPosition[0];
  var vertical = finger.tipPosition[1];
  if(horizontal < rawXMin){
    rawXMin = horizontal;
  }
  if(horizontal > rawXMax){
    rawXMax = horizontal;
  }
  if(vertical < rawYMin){
    rawYMin = vertical;
  }
  if(vertical > rawYMax){
    rawYMax = vertical;
  }

  var x_pos_finger = ((horizontal-rawXMin)/(rawXMax - rawXMin)) * window.innerWidth ;
  var y_pos_finger = window.innerHeight - (((vertical-rawYMin)/(rawYMax-rawYMin))* window.innerHeight);
  console.log(finger.bones[1]);

console.log(finger.bones[1].basis[1]);
  for(var n = 0; n < 4; n++){
  //  console.log(finger.bones[n]);
      //HandleBone(finger.bones[n]);
  }
  //only show circle for index
  //circle(x_pos_finger,y_pos_finger,50);
}


function HandleBone(bone){
  var x_pos_bone = bone.basis[0];
  var y_pos_bone = bone.basis[1];
  var z_pos_bone = bone.basis[2];
  console.log(bone.basis[0]);
}
//infinity loop
Leap.loop(controllerOptions, function(frame){

 HandleFrame(frame);



}

);
