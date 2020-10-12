nj.config.printThreshold = 1000;
const knnClassifier = ml5.KNNClassifier();
var m = 0
var n = 0
var trainingCompleted = false
var controllerOptions = {};

var previousNumHands = 0;
var currentNumbHands = 0;
var framesOfData = nj.zeros([5,4,6]);
var numSamples = 100;
var currentSample = 0;

function Train(){
  //console.log(train0.pick().toString())
  for(var i = 0 ; i < train7.shape[3] ; i++){

    var features = train7.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),7)

    features = train9.pick(null,null,null,i)
    features = features.reshape(1,120)

    knnClassifier.addExample(features.tolist(),9)
  }
}
function compute_prediction_7(c,d){
  var r = (((n-1)*m) + (c==d))/n
  n++;
  if(r!=0){
    m = r
  }
  console.log(n,m,c)
}
function Test(){
  var currentFeatures = framesOfData
  currentFeatures = currentFeatures.reshape(1,120)
  predictLabel = knnClassifier.classify(currentFeatures.tolist(), GotResults);
}

function GotResults(err, result){
  compute_prediction_7(result.label,7)
}

function HandleFrame(frame){
 clear();

  //one hand over the device
  if(frame.hands.length >= 1){
    // first element in the hands
    var hand = frame.hands[0];
    var interactionBox = frame.interactionBox;
    HandleHand(hand,interactionBox);
}
}

function HandleHand(hand,interactionBox){
   //fingers element
    var fingers = hand.fingers;
    //iterrate each finger
    for(var n = 3; 0 <=n; --n){
      for(var i=0; i <fingers.length; i++){
        HandleFinger(fingers[i],n,i,interactionBox)
      }
    }
  }

function HandleFinger(finger,n,fingerIndex,interactionBox){

      HandleBone(finger.bones[n],n,fingerIndex,interactionBox);
}


function HandleBone(bone,type,fingerIndex,interactionBox){
  var bone_start = bone.prevJoint;
  var bone_end = bone.nextJoint;

  var normalizedPrevJoint = interactionBox.normalizePoint(bone.prevJoint,true);
  var normalizedNextJoint = interactionBox.normalizePoint(bone.nextJoint,true);

  var x_start = normalizedPrevJoint[0];
  var x_end =  normalizedNextJoint[0];

  var y_start = normalizedPrevJoint[1];
  var y_end = normalizedNextJoint[1];

  var z_start = bone_start[2];
  var z_end = bone_end[2];


  framesOfData.set(fingerIndex,type,0,x_start);
  framesOfData.set(fingerIndex,type,1,y_start);
  framesOfData.set(fingerIndex,type,2,1);
  framesOfData.set(fingerIndex,type,3,x_end);
  framesOfData.set(fingerIndex,type,4,y_end);
  framesOfData.set(fingerIndex,type,5,1);

  Test()

  var canvasXStart = window.innerWidth * x_start;
  var canvasXEnd = window.innerWidth * x_end;
  var canvasYStart = window.innerHeight * (1-y_start);
  var canvasYEnd =  window.innerHeight * (1-y_end);

    //line and line weight
    switch(type){
      case 0:
      strokeWeight(20)
      stroke(210)
      break;
      case 1:
      strokeWeight(15)
      stroke(70)
      break;
      case 2:
      strokeWeight(10)
      stroke(40)
      break;
      case 3:
      strokeWeight(5)
      stroke(10)
      break;
    }

  line(canvasXStart,canvasYStart,canvasXEnd,canvasYEnd);

}


// function RecordData(){
//   if(currentNumbHands == 1){
//     currentSample++;
//     if(currentSample == numSamples){
//       currentSample = 0;
//     }
//   }
//   if(currentNumbHands == 2 && previousNumHands == 1){
//     console.log(framesOfData.toString())
//   }
//
// }

var l = true
Leap.loop(controllerOptions, function(frame){
  clear();
  if(trainingCompleted == false){
    Train();
    trainingCompleted = true;
  }

  //currentNumbHands = frame.hands.length;
  HandleFrame(frame);
  //previousNumHands = currentNumbHands;

})
