
const knnClassifier = ml5.KNNClassifier();
var testingSampleIndex = 1
var trainingCompleted = false


function Train(){
  //console.log(train0.pick().toString())
  // console.log(test.toString())
  for(var i = 0 ; i < train0.shape[3] ; i++){
    var features0 = train0.pick(null,null,null,i)
    features0 = features0.reshape(1,120)

    var features1 = train1.pick(null,null,null,i)
    features1 = features1.reshape(1,120)

    knnClassifier.addExample(features0.tolist(),0)
    knnClassifier.addExample(features1.tolist(),1)
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
