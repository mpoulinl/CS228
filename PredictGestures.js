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

var current_usrname = "none";
var programState = 0;
var last_performance;
var numerator = 0;
var denominator = 0;
var current_performance;
var digitToshow = 0;
var timeSinceLastDigitChange = new Date();
var wrong = false;
var phase1 = [0,1,2,3,4,5,6,7,8,9];
var phase2 = [3,3,3,3,3,3,3,3,3,3];
var num_remove = 0;
var index = 0;
var num_phase = 1;
var c;
function CreateNewUser(username,list){
  var item = document.createElement('th');
  var item2 = document.createElement('tr');
  item.innerHTML = String(username);
  item.id = String(username) + "_name";
  item2.id = String(username);
  list.appendChild(item2);
  item2.appendChild(item);
  CreateSignInItem(username,item2)
}

function CreateSignInItem(username,list){
  var item_signins = document.createElement('th');
  item_signins.innerHTML = numerator/denominator;
  item_signins.id = String(username) + "_signins";
  list.appendChild(item_signins)
}

function IsNewUser(username,list){
  var usernameFound = false;
  var users = list.children;
  for(var i = 0 ; i < users.length ; i++){
    if(username == users[i].id){
      usernameFound = true;
    }
  }

  return usernameFound == false;

}

function SignIn(){
  if(current_usrname != "none"){
    ID = String(current_usrname) + "_signins";
    listItem = document.getElementById(ID);
    console.log(listItem.innerHTML.value);
    if(listItem.innerHTML.value == null){
      console.log("HI")
      listItem.innerHTML = (numerator/denominator);
    }
    else if (listItem.innerHTML.value < (numerator/denominator)) {
        listItem.innerHTML = (numerator/denominator);
    }

  }
  numerator = 0;
  denominator = 0;
  phase1 = [0,1,2,3,4,5,6,7,8,9];
  phase2 = [3,3,3,3,3,3,3,3,3,3];
  num_phase = 1;
  current_usrname = document.getElementById('username').value;

  //paragraph


  username = document.getElementById('username').value;
  var list = document.getElementById('users');

  //paragraph
  var user_playing = document.getElementById("user-play");
  if(document.getElementById(username+"_signins") == null){
     user_playing.innerHTML = String("User : " + username + "    Last Score: None");
  }
  else{
      user_playing.innerHTML = String("User : " + username + "    Last Score: " + str(document.getElementById(username+"_signins").value));
  }

  if(IsNewUser(username,list)){
    CreateNewUser(username,list)
    //new list sign in
    //CreateSignInItem(username,list);
  }
  else{
  }
  //console.log(list.innerHTML);
  return false;
}
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

    features = train1three.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),1)

    features = train2.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),2)

    features = train2two.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),2)

    features = train2three.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),2)

    features = train3.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),3)

    features = train3two.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),3)

    features = train3Three.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),3)

    features = train3four.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),3)

    features = train4.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),4)

    features = train4two.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),4)

    features = train4three.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),4)

    features = train4four.pick(null,null,null,i)
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

    features = train5four.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),5)

    features = train5five.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),5)

    features = train6.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),6)

    features = train6two.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),6)

    features = train6three.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),6)

    // features = train7.pick(null,null,null,i)
    // features = features.reshape(1,120)
    // knnClassifier.addExample(features.tolist(),7)

    features = train7two.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),7)

    features = train7three.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),7)

    features = train8.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),8)

    features = train8two.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),8)

    features = train8three.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),8)

    features = train9.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),9)

    features = train9two.pick(null,null,null,i)
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),9)

  }
}
function compute_prediction_7(c,d){
  n++
  m = (((n-1)*m) + (c==d))/n


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
  //console.log(result.label)

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
      stroke((255*(1-m)), (255*m),0);
      break;
      case 1:
      strokeWeight(15)
      stroke((255*(1-m)),(255*m),0);
      break;
      case 2:
      strokeWeight(10)
      stroke((255*(1-m)),(255*m),0);
      break;
      case 3:
      strokeWeight(5)
      stroke((255*(1-m)),(255*m),0);
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
  if(CenterDataX() < 0.20 ){
    image(arrowRight,window.innerWidth/2.1, 0, window.innerWidth/2.2, window.innerHeight/2.2);
    return true;
  }
  else{
    return false;
  }
}

function HandIsTooFarToTheRight(){
  if(CenterDataX() > 0.80 ){
    image(arrowLeft,window.innerWidth/2.1, 0, window.innerWidth/2.2, window.innerHeight/2.2);
    return true;
  }
  else{
    return false;
  }
}

function HandIsTooFarToHigh(){
  if(CenterDataY() < 0.20 ){
    image(arrowUP,window.innerWidth/2.1, 0, window.innerWidth/2.2, window.innerHeight/2.2);
    return true;
  }
  else{
    return false;
  }
}

function HandIsTooFarToLow(){
  if(CenterDataY() > 0.80 ){
    image(arrowDown,window.innerWidth/2.1, 0, window.innerWidth/2.2, window.innerHeight/2.2);
    return true;
  }
  else{
    return false;
  }
}

function HandIsTooClose(){
  if(CenterDataZ() < 0.20 ){
    image(arrowToward,window.innerWidth/2.1, 0, window.innerWidth/2.2, window.innerHeight/2.2)
    return true;
  }
  else{
    return false;
  }
}

function HandIsTooFar(){
  if(CenterDataZ() > 0.80 ){
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
  if(num_phase == 1){
    DrawLowerRightPanel();
    DrawLowerLeftPanel();
  }
  else{
    DrawLowerLeftPanel();
  }



  DetermineWhetherToSwitch();
  //test
}

function DrawLowerRightPanel_2(){
    DrawLowerLeftPanel();
    image(three_plus_four,window.innerWidth/2.1, window.innerHeight/2.2, window.innerWidth/2.2, window.innerHeight/2.2);

}
function DrawLowerRightPanel(){
  if(digitToshow == 1){
    image(asl_1,window.innerWidth/2.1, window.innerHeight/2.2, window.innerWidth/2.2, window.innerHeight/2.2);
  }
  if(digitToshow == 2){
    image(asl_2,window.innerWidth/2.1, window.innerHeight/2.2, window.innerWidth/2.2, window.innerHeight/2.2);
  }
  if(digitToshow == 3){
    image(asl_3,window.innerWidth/2.1, window.innerHeight/2.2, window.innerWidth/2.2, window.innerHeight/2.2);
  }
  if(digitToshow == 4){
    image(asl_4,window.innerWidth/2.1, window.innerHeight/2.2, window.innerWidth/2.2, window.innerHeight/2.2);
  }
  if(digitToshow == 5){
    image(asl_5,window.innerWidth/2.1, window.innerHeight/2.2, window.innerWidth/2.2, window.innerHeight/2.2);
  }
  if(digitToshow == 6){
    image(asl_6,window.innerWidth/2.1, window.innerHeight/2.2, window.innerWidth/2.2, window.innerHeight/2.2);
  }
  if(digitToshow == 7){
    image(asl_7,window.innerWidth/2.1, window.innerHeight/2.2, window.innerWidth/2.2, window.innerHeight/2.2);
  }
  if(digitToshow == 8){
    image(asl_8,window.innerWidth/2.1, window.innerHeight/2.2, window.innerWidth/2.2, window.innerHeight/2.2);
  }
  if(digitToshow == 9){
    image(asl_9,window.innerWidth/2.1, window.innerHeight/2.2, window.innerWidth/2.2, window.innerHeight/2.2);
  }
  if(digitToshow == 0){
    image(asl_0,window.innerWidth/2.1, window.innerHeight/2.2, window.innerWidth/2.2, window.innerHeight/2.2);
  }
  DrawLowerLeftPanel;
}
function DrawLowerLeftPanel(){
  if(digitToshow == 1){
    image(num_1,0, window.innerHeight/2.2, window.innerWidth/2.2, window.innerHeight/2.2);
  }
  if(digitToshow == 2){
    image(num_2,0, window.innerHeight/2.2, window.innerWidth/2.2, window.innerHeight/2.2);
  }
  if(digitToshow == 3){
    image(num_3,0, window.innerHeight/2.2, window.innerWidth/2.2, window.innerHeight/2.2);
  }
  if(digitToshow == 4){
    image(num_4,0, window.innerHeight/2.2, window.innerWidth/2.2, window.innerHeight/2.2);
  }
  if(digitToshow == 5){
    image(num_5,0, window.innerHeight/2.2, window.innerWidth/2.2, window.innerHeight/2.2);
  }
  if(digitToshow == 6){
    image(num_6,0, window.innerHeight/2.2, window.innerWidth/2.2, window.innerHeight/2.2);
  }
  if(digitToshow == 7){
    image(num_7,0, window.innerHeight/2.2, window.innerWidth/2.2, window.innerHeight/2.2);
  }
  if(digitToshow == 8){
    image(num_8,0, window.innerHeight/2.2, window.innerWidth/2.2, window.innerHeight/2.2);
  }
  if(digitToshow == 9){
    image(num_9,0, window.innerHeight/2.2, window.innerWidth/2.2, window.innerHeight/2.2);
  }
  if(digitToshow == 0){
    image(num_0,0, window.innerHeight/2.2, window.innerWidth/2.2, window.innerHeight/2.2);
  }
}
function SwitchDigits(){
  //console.log(phase1.length, " index : ",index, " phase : ", num_phase);
  digitToshow = phase1[index];
  n=0;
  m=0;

}

function phase_choice(time_min, time_max){
  var currentTime = new Date();
  var TimeInMilliseconds =  (currentTime - timeSinceLastDigitChange);
  var TimeInSeconds = TimeInMilliseconds/1000;
  if(num_phase == 2 && TimeInSeconds <= 2){
    DrawLowerRightPanel();
  }
  if(num_phase == 3 && TimeInSeconds <= 1){
    DrawLowerRightPanel();
  }

  if((m >= 0.50 && TimeInSeconds >= time_min) || (TimeInSeconds == time_max && c == digitToshow)){

      for(var i = 0 ; i < phase1.length ; i++){
        if(digitToshow == phase1[i]){
          denominator++;
          numerator++;
          console.log(numerator/denominator);
          phase1.splice(i,1);

        }
      }
      if(index == phase1.length){
        index = index - 1;
      }
      if(index < 0){
        phase1= [0,1,2,3,4,5,6,7,8,9];
        index=0;
        num_phase = num_phase+1;
      }
    timeSinceLastDigitChange = currentTime;
    //display_yes();
    return true;
  }
  else if ((m < 0.50 && TimeInSeconds > time_max)){
    denominator++;
    if(index < ((phase1.length)-1)){
      index = index+1
    }
    else{
      index = 0;
    }
    //display_no();
    timeSinceLastDigitChange = currentTime;
    return true;
  }
  else{
    return false;
  }
}
function display_yes(){
  var cur = new Date();
  var TimeInSeconds = cur/1000;
  while(TimeInSeconds != 2){
    var TimeInSeconds = cur/1000;
    image(yes,0,0, window.innerWidth, window.innerHeight);
  }
}
function display_no(){
  var cur = new Date();
  var TimeInSeconds = cur/1000;
  while(TimeInSeconds != 2){
    var TimeInSeconds = cur/1000;
    image(no,0,0, window.innerWidth, window.innerHeight);
  }
}

function TimeToSwitchDigits(){
  var currentTime = new Date();
  var TimeInMilliseconds =  (currentTime - timeSinceLastDigitChange);
  var TimeInSeconds = TimeInMilliseconds/1000;
  if(num_phase == 1){
    if((m >= 0.50 && TimeInSeconds >= 2) || (TimeInSeconds == 5 && c == digitToshow)){

        for(var i = 0 ; i < phase1.length ; i++){
          if(digitToshow == phase1[i]){
            denominator++;
            numerator++;
            console.log(numerator/denominator);
            phase1.splice(i,1);
          }
        }
        if(index == phase1.length){
          index = index - 1;
        }
        if(index < 0){
          phase1= [0,1,2,3,4,5,6,7,8,9];
          index=0;
          num_phase = 2;
        }
      timeSinceLastDigitChange = currentTime;
      return true;
    }
    else if ((m < 0.50 && TimeInSeconds > 5)){
      denominator++;
      if(index < ((phase1.length)-1)){
        index = index+1
      }
      else{
        index = 0;
      }
      timeSinceLastDigitChange = currentTime;
      return true;
    }
    else{
      return false;
    }
  }

  else if (num_phase == 2) {
    if(TimeInSeconds <= 2 && phase2[digitToshow] == 3){
      DrawLowerRightPanel_2();
    }
    if(TimeInSeconds <= 1 && phase2[digitToshow] ==2){
      DrawLowerRightPanel_2();
    }

    if(((m >= 0.50 && TimeInSeconds >= 2) || (TimeInSeconds == 4 && c == digitToshow)) && phase2[digitToshow] == 3){
      phase2[digitToshow] = phase2[digitToshow] - 1;
      if(phase2[digitToshow] == 0){
        for(var i = 0 ; i < phase1.length ; i++){
          if(digitToshow == phase1[i]){
            denominator++;
            numerator++;
            console.log(numerator/denominator);
            phase1.splice(i,1);
          }
        }
        if(index == phase1.length){
          index = index - 1;
        }
        if(index < 0){
          phase1= [0,1,2,3,4,5,6,7,8,9];
          index=0;
          num_phase = 3;
        }
      }
      timeSinceLastDigitChange = currentTime;
      return true;
    }
    else if(((m >= 0.50 && TimeInSeconds >= 1) || (TimeInSeconds == 2 && c == digitToshow)) && phase2[digitToshow] == 2){
      phase2[digitToshow] = phase2[digitToshow] - 1;
      if(phase2[digitToshow] == 0){
        for(var i = 0 ; i < phase1.length ; i++){
          if(digitToshow == phase1[i]){
            denominator++;
            numerator++;
            console.log(numerator/denominator);
            phase1.splice(i,1);
          }
        }
        if(index == phase1.length){
          index = index - 1;
        }
        if(index < 0){
          phase1= [0,1,2,3,4,5,6,7,8,9];
          index=0;
          num_phase = 3;
        }
      }
      timeSinceLastDigitChange = currentTime;
      return true;
    }
    else if(((m >= 0.50 && TimeInSeconds >= 1) || (TimeInSeconds == 1 && c == digitToshow)) && phase2[digitToshow] == 1){
      phase2[digitToshow] = phase2[digitToshow] - 1;
      if(phase2[digitToshow] == 0){
        for(var i = 0 ; i < phase1.length ; i++){
          if(digitToshow == phase1[i]){
            denominator++;
            numerator++;
            console.log(numerator/denominator);
            phase1.splice(i,1);
          }
        }
        if(index == phase1.length){
          index = index - 1;
        }
        if(index < 0){
          phase1= [0,1,2,3,4,5,6,7,8,9];
          index=0;
          num_phase = 3;
        }
      }
      timeSinceLastDigitChange = currentTime;
      return true;
    }
    else if ((m < 0.50 && TimeInSeconds > 5)){
      denominator++;
      if(index < ((phase1.length)-1)){
        index = index+1
      }
      else{
        index = 0;
      }
      timeSinceLastDigitChange = currentTime;
      return true;
    }
    else{
      return false;
    }
  }
  else if (num_phase = 3) {
    if((m >= 0.50 && TimeInSeconds >= 1) || (TimeInSeconds == 1 && c == digitToshow)){

        for(var i = 0 ; i < phase1.length ; i++){
          if(digitToshow == phase1[i]){
            denominator++;
            numerator++;
            console.log(numerator/denominator);
            phase1.splice(i,1);
          }
        }
        if(index == phase1.length){
          index = index - 1;
        }
        if(index < 0){
          phase1= [0,1,2,3,4,5,6,7,8,9];
          index=0;
          num_phase = 4;
        }
      timeSinceLastDigitChange = currentTime;
      return true;
    }
    else if ((m < 0.50 && TimeInSeconds > 1)){
      denominator++;
      if(index < ((phase1.length)-1)){
        index = index+1
      }
      else{
        index = 0;
      }
      timeSinceLastDigitChange = currentTime;
      return true;
    }
    else{
      return false;
    }
  }

}

function DetermineWhetherToSwitch(){
  if(num_phase == 1){
    if(phase_choice(2,5)){
      SwitchDigits();
    }
  }
  else if(num_phase == 2){
    if(phase_choice(2,4)){
      SwitchDigits();
    }
  }
  else if(num_phase == 3){
    if(phase_choice(2,3)){
      SwitchDigits();
    }
  }
  else if(num_phase == 4){
    if(phase_choice(2,3)){
      SwitchDigits();
    }
  }
  else if(num_phase == 5){
    if(phase_choice(0.75,2)){
      SwitchDigits();
    }
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
  if(current_usrname != "none"){
    var user_playing = document.getElementById("user-play2");
    user_playing.innerHTML = String("Current Score : " + numerator/denominator);
    if(programState == 0){
      HandleState0(frame)
    }
    else if (programState == 1){
      HandleState1(frame)
    }
    else{
      HandleState2(frame)
    }
  }

  // clear();


  //currentNumbHands = frame.hands.length;
  //HandleFrame(frame);
  //previousNumHands = currentNumbHands;

})
