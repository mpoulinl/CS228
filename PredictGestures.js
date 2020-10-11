
const knnClassifier = ml5.KNNClassifier();
var testingSampleIndex = 1
var trainingCompleted = false


function Train(){
  console.log(train0.shape[3].toString())
  // console.log(test.toString())
  for(var i = 0 ; i < 2 ; i++){

  }
}

function Test(){

}



var l = true
function draw(){
  clear();
  if(trainingCompleted == false){
    Train();
    trainingCompleted = true;
  }
  Test()

}
