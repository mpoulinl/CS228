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

  for(var n = 3; 0 <= n; --n){
      HandleBone(finger.bones[n],n);
  }
  //only show circle for index
  //circle(x_pos_finger,y_pos_finger,50);
}


function HandleBone(bone,type){
  var bone_start = bone.prevJoint;
  var bone_end = bone.nextJoint;

  var start = TransformCoordinates(bone_start[0],bone_start[2])
  var end = TransformCoordinates(bone_end[0],bone_end[2])

  //line and line weight
  switch(type){
    case 0:
    strokeWeight(4)
    stroke(80)
    break;
    case 1:
    strokeWeight(8)
    stroke(60)
    break;
    case 2:
    strokeWeight(16)
    stroke(40)
    break;
    case 3:
    strokeWeight(32)
    stroke(20)
    break;
  }
  line(start[0],start[1],end[0],end[1]);

}

function TransformCoordinates(x,y) {
  if(x < rawXMin){
    rawXMin = x;
  }
  if(x > rawXMax){
    rawXMax = x;
  }
  if(y < rawYMin){
    rawYMin = y;
  }
  if(y > rawYMax){
    rawYMax = y;
  }
  var x_pos = (((x-rawXMin)/(rawXMax - rawXMin)) * window.innerWidth) ;
  var y_pos = ((y-rawYMin)/(rawYMax-rawYMin))* window.innerHeight;
  return[x_pos,y_pos];
}
//
// var center_bone = bone.center();
// //x_pos_bone
// var horizontal = center_bone[0];
// var y_center_bone = center_bone[2];
// //z_pos_bone
// var vertical = center_bone[1];
// console.log(horizontal);
// //placing it to scale

//


//infinity loop
Leap.loop(controllerOptions, function(frame){

 HandleFrame(frame);



}

);
