var trainingCompleted = false

function Train(){
  console.log("I am being Trained");
}

function Test(){
  console.log("I am being Test");
}

function draw(){
  clear();
  if(trainingCompleted == false){
    Train();
  }
  Test();
}
