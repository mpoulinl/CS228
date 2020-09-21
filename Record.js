var oneFrameOfData = nj.zeros([5,4,6]);

//four global variable for max/min width and innerHeight
var rawXMin = 10000;
var rawXMax = -10000;
var rawYMin = 10000;
var rawYMax = -10000;

var previousNumHands = 0;
var currentNumbHands = 0;
var controllerOptions = {};
var i = 0;

//function
function HandleFrame(frame){
 clear();

  //one hand over the device
  if(frame.hands.length >= 1){
    // first element in the hands
    var hand = frame.hands[0];
    HandleHand(hand);
}
}

function HandleHand(hand){
   //fingers element
    var fingers = hand.fingers;
    //iterrate each finger
    for(var n = 3; 0 <=n; --n){
      for(var i=0; i <fingers.length; i++){
        HandleFinger(fingers[i],n,i)
      }
    }
  }

function HandleFinger(finger,n,fingerIndex){

      HandleBone(finger.bones[n],n,fingerIndex);
}


function HandleBone(bone,type,fingerIndex){
  var bone_start = bone.prevJoint;
  var bone_end = bone.nextJoint;

  var start = TransformCoordinates(bone_start[0],bone_start[1])
  var end = TransformCoordinates(bone_end[0],bone_end[1])

  var z1 = bone_start[2];
  var z2 = bone_end[2];
  var sum = z1+z2+bone_start[0]+bone_end[0]+bone_start[1]+bone_end[1]

  oneFrameOfData.set(fingerIndex,type,0,bone_start[0]);
  oneFrameOfData.set(fingerIndex,type,1,bone_start[1]);
  oneFrameOfData.set(fingerIndex,type,2,bone_start[2]);
  oneFrameOfData.set(fingerIndex,type,3,bone_end[0]);
  oneFrameOfData.set(fingerIndex,type,4,bone_end[1]);
  oneFrameOfData.set(fingerIndex,type,5,bone_end[2]);


  if(currentNumbHands == 1){

    //line and line weight
    switch(type){
      case 0:
      strokeWeight(5)
      stroke('rgb(150,243,68)')
      break;
      case 1:
      strokeWeight(4)
      stroke('rgb(100,202,10)')
      break;
      case 2:
      strokeWeight(3)
      stroke('rgb(73,148,7)')
      break;
      case 3:
      strokeWeight(2)
      stroke('rgb(34,70,3)')
      break;
    }
  }
  else{
    switch(type){
      case 0:
      strokeWeight(5)
      stroke('rgb(255,4,4)')
      break;
      case 1:
      strokeWeight(4)
      stroke('rgb(205,14,14)')
      break;
      case 2:
      strokeWeight(3)
      stroke('rgb(156,9,9)')
      break;
      case 3:
      strokeWeight(2)
      stroke('rgb(91,3,3)')
      break;
    }

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
  var y_pos = window.innerHeight-(((y-rawYMin)/(rawYMax-rawYMin))* window.innerHeight);
  return[x_pos,y_pos];
}

function RecordData(){
  if(currentNumbHands == 1 && previousNumHands == 2){
    background(51);
    console.log(oneFrameOfData.toString());
  }
}
//infinity loop
Leap.loop(controllerOptions, function(frame){
  currentNumbHands = frame.hands.length;
  HandleFrame(frame);
  RecordData();
  previousNumHands = currentNumbHands;



}

);
