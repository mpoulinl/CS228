nj.config.printThreshold = 1000;
const knnClassifier = ml5.KNNClassifier();
var m = 0
var n = 0
var trainingCompleted = false
var controllerOptions = {};

var previousNumHands = 0;
var currentNumbHands = 0;
var oneFrameOfData = nj.zeros([5,4,6]);
var numSamples = 100;
var currentSample = 0;

function Train(){
  //console.log(train0.pick().toString())
  for(var i = 0 ; i < train7.shape[3] ; i++){


    features = train0.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),0)

    features = train1.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),1)

    features = train2.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),2)

    features = train3.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),3)

    features = train4.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),4)

    features = train5.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),5)

    features = train6.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),6)

    var features = train7.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),7)

    features = train8.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),8)

    features = train9.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),9)


    //extra
    features = train1Bongard.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),1)

    features = train1Davis.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),1)

  }
}
function compute_prediction_7(c,d){
  n++
  m = (((n-1)*m) + (c==d))/n
  console.log(n,m,c)
}
function Test(){
  var currentFeatures = oneFrameOfData
  CenterDataX()
  CenterDataY()
  currentFeatures = currentFeatures.reshape(1,120)
  predictLabel = knnClassifier.classify(currentFeatures.tolist(), GotResults);
}

function GotResults(err, result){
  //compute_prediction_7(result.label,2);
  console.log(result.label)
}
function CenterDataX(){
  var xValues = oneFrameOfData.slice([],[],[0,6,3])
  var currentMean = xValues.mean()
  var horizontalShift = 0.5 - currentMean

  for(var i = 0 ; i < 5 ; i++){
    for(var y = 0 ; y < 4 ; y ++){
      currentX = oneFrameOfData.get(i,y,0)
      shiftedX = currentX + horizontalShift
      oneFrameOfData.set(i,y,0,shiftedX)
      currentX = oneFrameOfData.get(i,y,3)
      shiftedX = currentX + horizontalShift
      oneFrameOfData.set(i,y,3,shiftedX)
    }
  }
  xValues = oneFrameOfData.slice([],[],[0,6,3])
  currentMean = xValues.mean()
  //console.log(currentMean)

}

function CenterDataY(){
  var yValues = oneFrameOfData.slice([],[],[1,6,3])
  var currentMean = yValues.mean()
  var verticalShift = 0.5 - currentMean

  for(var i = 0 ; i < 5 ; i++){
    for(var y = 0 ; y < 4 ; y ++){
      currentY = oneFrameOfData.get(i,y,1)
      shiftedY = currentY + verticalShift
      oneFrameOfData.set(i,y,1,shiftedY)
      currentY = oneFrameOfData.get(i,y,4)
      shiftedY = currentY + verticalShift
      oneFrameOfData.set(i,y,4,shiftedY)
    }
  }
  yValues = oneFrameOfData.slice([],[],[1,6,3])
  currentMean = yValues.mean()
  //console.log(currentMean)

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


  oneFrameOfData.set(fingerIndex,type,0,x_start);
  oneFrameOfData.set(fingerIndex,type,1,y_start);
  oneFrameOfData.set(fingerIndex,type,2,1);
  oneFrameOfData.set(fingerIndex,type,3,x_end);
  oneFrameOfData.set(fingerIndex,type,4,y_end);
  oneFrameOfData.set(fingerIndex,type,5,1);

  Test()

  var canvasXStart = window.innerWidth * x_start;
  var canvasXEnd = window.innerWidth * x_end;
  var canvasYStart = window.innerHeight * (1-y_start);
  var canvasYEnd =  window.innerHeight * (1-y_end);

    //line and line weight
    switch(type){
      case 0:
      strokeWeight(40)
      stroke(210)
      break;
      case 1:
      strokeWeight(30)
      stroke(120)
      break;
      case 2:
      strokeWeight(20)
      stroke(70)
      break;
      case 3:
      strokeWeight(10)
      stroke(10)
      break;
    }

  line(canvasXStart,canvasYStart,canvasXEnd,canvasYEnd);

}


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
