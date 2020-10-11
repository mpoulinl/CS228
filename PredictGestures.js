
const knnClassifier = ml5.KNNClassifier();
var testingSampleIndex = 1
var trainingCompleted = false


function Train(){
  //console.log(train0.pick().toString())
  // console.log(test.toString())
  for(var i = 0 ; i < train0.shape[3] ; i++){
    var features = train0.pick(null,null,null,i)
    console.log(features.toString())
    features = features.reshape(1,120)
    knnClassifier.addExample(features.tolist(),0)
  }
}

function Test(){
  var currentFeatures = train0.pick(null,null,null,testingSampleIndex)
  currentFeatures = currentFeatures.reshape(1,120)
  predictLabel = knnClassifier.classify(currentFeatures.tolist(), GotResults);

}

function GotResults(err, result){
  if(testingSampleIndex >= train0.shape[3]){
    testingSampleIndex = 0;
  }
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
