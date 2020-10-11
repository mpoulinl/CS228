
const knnClassifier = ml5.KNNClassifier();
var testingSampleIndex = 1
var trainingCompleted = false


function Train(){
  console.log(train0.toString())
  console.log(test.toString())
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
