nj.config.printThreshold = 1000;
const knnClassifier = ml5.KNNClassifier();
var testingSampleIndex = 0
var trainingCompleted = false
var controllerOptions = {};

var previousNumHands = 0;
var currentNumbHands = 0;
var framesOfData = nj.zeros([5,4,6,100]);
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

function Test(){
  var currentFeatures = test.pick(null,null,null,testingSampleIndex)
  currentFeatures = currentFeatures.reshape(1,120)
  predictLabel = knnClassifier.classify(currentFeatures.tolist(), GotResults);
}

function GotResults(err, result){

  console.log(result.label)
  testingSampleIndex++;
  if(testingSampleIndex > train7.shape[3]){
    testingSampleIndex = 0;
  }
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


  framesOfData.set(fingerIndex,type,0,currentSample,x_start);
  framesOfData.set(fingerIndex,type,1,currentSample,y_start);
  framesOfData.set(fingerIndex,type,2,currentSample,1);
  framesOfData.set(fingerIndex,type,3,currentSample,x_end);
  framesOfData.set(fingerIndex,type,4,currentSample,y_end);
  framesOfData.set(fingerIndex,type,5,currentSample,1);

  var canvasXStart = window.innerWidth * x_start;
  var canvasXEnd = window.innerWidth * x_end;
  var canvasYStart = window.innerHeight * (1-y_start);
  var canvasYEnd =  window.innerHeight * (1-y_end);

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
  line(canvasXStart,canvasYStart,canvasXEnd,canvasYEnd);

}


function RecordData(){
  if(currentNumbHands == 1){
    currentSample++;
    if(currentSample == numSamples){
      currentSample = 0;
    }
  }
  if(currentNumbHands == 2 && previousNumHands == 1){
    console.log(framesOfData.toString())
  }

}

var l = true
Leap.loop(controllerOptions, function(frame){
  clear();
  if(trainingCompleted == false){
    Train();
    trainingCompleted = true;
  }

  currentNumbHands = frame.hands.length;
  HandleFrame(frame);
  RecordData();
  previousNumHands = currentNumbHands;

  Test()
})
