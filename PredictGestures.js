
const knnClassifier = ml5.KNNClassifier();
var testingSampleIndex = 1
var trainingCompleted = false


var numSamples = irisData.shape;
var numRows = numSamples[0];
var numFeatures = numSamples[1] - 1;
predictedClassLabels = nj.zeros(numRows,1)



function Train(){
  console.log(train0.toString())
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
