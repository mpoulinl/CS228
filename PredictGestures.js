nj.config.printThreshold = 1000;
const knnClassifier = ml5.KNNClassifier();
var testingSampleIndex = 1
var trainingCompleted = false


function Train(){
  //console.log(train0.pick().toString())
  console.log( train7.shape[3])
  for(var i = 0 ; i < train7.shape[3] ; i++){
    var features7 = train7.pick(null,null,null,i)
    features7 = features7.reshape(1,120)

    var features9 = train9.pick(null,null,null,i)
    features9 = features9.reshape(1,120)

    knnClassifier.addExample(features7.tolist(),7)
    knnClassifier.addExample(features9.tolist(),9)
  }
}

function Test(){
  var currentFeatures = test.pick(null,null,null,testingSampleIndex)
  currentFeatures = currentFeatures.reshape(1,120)
  predictLabel = knnClassifier.classify(currentFeatures.tolist(), GotResults);
}

function GotResults(err, result){

  console.log(result.label)
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
