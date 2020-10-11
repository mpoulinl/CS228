
const knnClassifier = ml5.KNNClassifier();
var testingSampleIndex = 1
var trainingCompleted = false


function Train(){
  //console.log(train0.pick().toString())
  // console.log(test.toString())
  for(var i = 0 ; i < train0.shape[3] ; i++){
    var features = train0.pick(null,null,null,i)
    features = features.reshape(1,120)
    //knnClassifier.addExample(features.tolist(),currentLabel)
  }
  // var currentFeatures = irisData.pick(i).slice([0,4])
  //   var currentLabel = irisData.pick(i).get(4)
  //   knnClassifier.addExample(currentFeatures.tolist(),currentLabel)
  // for(var i = 0 ; i < test.shape[3] ; i++){
  //   var features = test.pick(null,null,null,i)
  // }
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
