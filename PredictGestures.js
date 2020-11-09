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

var programState = 0;

var digitToshow = 1;
var timeSinceLastDigitChange = new Date();

// function CreateNewUser(username,list){
//   var item = document.createElement('li');
//   item.innerHTML = String(username);
//   item.id = String(username) + "_name";
//   list.appendChild(item);
// }
//
// function CreateSignInItem(username,list){
//   var item_signins = document.createElement('li');
//   item_signins.innerHTML = 1;
//   item_signins.id = String(username) + "_signins";
//   list.appendChild(item_signins)
// }
//
// function IsNewUser(username,list){
//   var usernameFound = false;
//   var users = list.children;
//   for(var i = 0 ; i < users.length ; i++){
//     if(username == users[i].innerHTML){
//       usernameFound = true;
//     }
//   }
//
//   return usernameFound == false;
//
// }
//
// function SignIn(){
//   username = document.getElementById('username').value;
//   var list = document.getElementById('users');
//   if(IsNewUser(username,list)){
//     CreateNewUser(username,list)
//     //new list sign in
//     CreateSignInItem(username,list);
//   }
//   else{
//     ID = String(username) + "_signins";
//     listItem = document.getElementById(ID);
//     listItem.innerHTML = parseInt(listItem.innerHTML) + 1;
//   }
//   console.log(list.innerHTML);
//   return false;
// }
function Train(){
  //console.log(train0.pick().toString())
  for(var i = 0 ; i < 100 ; i++){


    features = train0.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),0)

    features = train1.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),1)

    features = train1two.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),1)

    features = train2.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),2)

    features = train2two.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),2)

    features = train3.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),3)

    features = train3two.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),3)

    features = train4.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),4)

    features = train4two.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),4)

    features = train5.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),5)

    features = train5two.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),5)

    features = train5three.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),5)

    features = train6.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),6)

    features = train6two.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),6)

    features = train7.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),7)

    features = train7two.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),7)

    features = train8.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),8)

    features = train8two.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),8)

    features = train9.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),9)

  }
}
function compute_prediction_7(c,d){
  n++
  m = (((n-1)*m) + (c==d))/n
  // console.log(n,m,c)
  console.log(m,d)
}
function Test(){
  var currentFeatures = oneFrameOfData
  // CenterDataX()
  // CenterDataY()
  // CenterDataZ()
  currentFeatures = currentFeatures.reshape(1,120)
  predictLabel = knnClassifier.classify(currentFeatures.tolist(), GotResults);
}

function GotResults(err, result){
  compute_prediction_7(result.label,digitToshow);

}
function CenterDataX(){
  var xValues = oneFrameOfData.slice([],[],[0,6,3])
  var currentMean = xValues.mean()
  return currentMean

}

function CenterDataY(){
  var yValues = oneFrameOfData.slice([],[],[1,6,3])
  var currentMean = yValues.mean()
  return currentMean


}

function CenterDataZ(){
  var zValues = oneFrameOfData.slice([],[],[2,6,3])
  var currentMean = zValues.mean()
  return currentMean


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

  var z_start = normalizedPrevJoint[2];
  var z_end = normalizedNextJoint[2];


  oneFrameOfData.set(fingerIndex,type,0,x_start);
  oneFrameOfData.set(fingerIndex,type,1,y_start);
  oneFrameOfData.set(fingerIndex,type,2,z_start);
  oneFrameOfData.set(fingerIndex,type,3,x_end);
  oneFrameOfData.set(fingerIndex,type,4,y_end);
  oneFrameOfData.set(fingerIndex,type,5,z_end);


  // Test()

  var canvasXStart = (window.innerWidth * x_start) * 0.5;
  var canvasXEnd = (window.innerWidth * x_end) * 0.5;
  var canvasYStart = (window.innerHeight * (1-y_start)) * 0.5;
  var canvasYEnd =  (window.innerHeight * (1-y_end)) * 0.5;

    //line and line weight
    switch(type){
      case 0:
      strokeWeight(20)
      stroke(210)
      break;
      case 1:
      strokeWeight(15)
      stroke(120)
      break;
      case 2:
      strokeWeight(10)
      stroke(70)
      break;
      case 3:
      strokeWeight(5)
      stroke(10)
      break;
    }

  line(canvasXStart,canvasYStart,canvasXEnd,canvasYEnd);

}

function DetermineState(frame){
  if(frame.hands.length  == 0){
    programState = 0
  }
  else{
    HandleFrame(frame)
    if(HandIsUncentered()){
      programState = 1
    }
    else{
      programState = 2
    }
  }
}

function HandIsUncentered(){

  if(HandIsTooFarToTheLeft() || HandIsTooFarToTheRight() || HandIsTooFarToHigh() || HandIsTooFarToLow() || HandIsTooFar() || HandIsTooClose() ){
    return true;
  }
  else{
    return false;
  }
}


function HandIsTooFarToTheLeft(){
  if(CenterDataX() < 0.25 ){
    image(arrowRight,window.innerWidth/2.1, 0, window.innerWidth/2.2, window.innerHeight/2.2);
    return true;
  }
  else{
    return false;
  }
}

function HandIsTooFarToTheRight(){
  if(CenterDataX() > 0.75 ){
    image(arrowLeft,window.innerWidth/2.1, 0, window.innerWidth/2.2, window.innerHeight/2.2);
    return true;
  }
  else{
    return false;
  }
}

function HandIsTooFarToHigh(){
  if(CenterDataY() < 0.25 ){
    image(arrowUP,window.innerWidth/2.1, 0, window.innerWidth/2.2, window.innerHeight/2.2);
    return true;
  }
  else{
    return false;
  }
}

function HandIsTooFarToLow(){
  if(CenterDataY() > 0.75 ){
    image(arrowDown,window.innerWidth/2.1, 0, window.innerWidth/2.2, window.innerHeight/2.2);
    return true;
  }
  else{
    return false;
  }
}

function HandIsTooClose(){
  if(CenterDataZ() < 0.25 ){
    image(arrowToward,window.innerWidth/2.1, 0, window.innerWidth/2.2, window.innerHeight/2.2)
    return true;
  }
  else{
    return false;
  }
}

function HandIsTooFar(){
  if(CenterDataZ() > 0.75 ){
    image(arrowAway,window.innerWidth/2.1, 0, window.innerWidth/2.2, window.innerHeight/2.2);
    return true;
  }
  else{
    return false;
  }
}
function HandleState0(frame) {
  TrainKNNIfNotDoneYet()
  DrawImageToHelpUserPutTheirHandOverTheDevice()
}
function HandleState1(frame) {
  //test
}
function HandleState2(frame) {
  HandleFrame(frame);
  Test();
  DrawLowerRightPanel();
  DetermineWhetherToSwitch();
  //test
}

function DrawLowerRightPanel(){
  if(digitToshow == 1){
    image(asl_1,window.innerWidth/2.1, window.innerHeight/2.2, window.innerWidth/2.2, window.innerHeight/2.2);
  }
  else{
    image(asl_2,window.innerWidth/2.1, window.innerHeight/2.2, window.innerWidth/2.2, window.innerHeight/2.2);
  }

}
function SwitchDigits(){
  if(digitToshow == 1){
    digitToshow = 2;
  }
  else{
    digitToshow = 1;
  }
}
function TimeToSwitchDigits(){
  var currentTime = new Date();
  var TimeInMilliseconds =  (currentTime - timeSinceLastDigitChange);
  var TimeInSeconds = TimeInMilliseconds/1000;
  if(TimeInSeconds > 10){
    timeSinceLastDigitChange = currentTime;
    return true;
  }
  else{
    return false;
  }
}

function DetermineWhetherToSwitch(){
  if(TimeToSwitchDigits()){
    SwitchDigits();
  }
}
function DrawImageToHelpUserPutTheirHandOverTheDevice(){
  image(img,window.innerWidth/2.1, 0, window.innerWidth/2.2, window.innerHeight/2.2);
}

function TrainKNNIfNotDoneYet() {
  if(trainingCompleted == false){
    // Train();
    trainingCompleted = true;
  }
}
Leap.loop(controllerOptions, function(frame){
  clear();
  if(trainingCompleted == false){
    Train();
    trainingCompleted = true;
  }
  DetermineState(frame);
  if(programState == 0){
    HandleState0(frame)
  }
  else if (programState == 1){
    HandleState1(frame)
  }
  else{
    HandleState2(frame)
  }
  // clear();


  //currentNumbHands = frame.hands.length;
  //HandleFrame(frame);
  //previousNumHands = currentNumbHands;

})
