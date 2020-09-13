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

  for(var n = 0; n < 4; n++){
      HandleBone(finger.bones[n]);
  }
  //only show circle for index
  //circle(x_pos_finger,y_pos_finger,50);
}


function HandleBone(bone){
  var bone_start = bone.prevJoint;
  var bone_end = bone.nextJoint;


  var center_bone = bone.center();
  //x_pos_bone
  var horizontal = center_bone[0];
  var y_center_bone = center_bone[2];
  //z_pos_bone
  var vertical = center_bone[1];
  console.log(horizontal);
  //placing it to scale
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

  var x_pos_bone = ((horizontal-rawXMin)/(rawXMax - rawXMin)) * window.innerWidth ;
  var y_pos_bone = window.innerHeight - (((vertical-rawYMin)/(rawYMax-rawYMin))* window.innerHeight);
  circle(x_pos_bone,y_pos_bone,50);

  var x_start = bone_start[0]+x_pos_bone;
  var x_end = bone_end[0]+x_pos_bone;
  var y_start = bone_start[2]+y_pos_bone;
  var y_end = bone_end[2]+y_pos_bone;

  line(x_start,y_start,x_end,y_end);



}
//infinity loop
Leap.loop(controllerOptions, function(frame){

 HandleFrame(frame);



}

);
