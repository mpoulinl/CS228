nj.config.printThreshold = 1000;
const knnClassifier = ml5.KNNClassifier();
var testingSampleIndex = 0
var trainingCompleted = false


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

var l = true
function draw(){
  clear();
  if(trainingCompleted == false){
    Train();
    trainingCompleted = true;
  }
  Test()

}
