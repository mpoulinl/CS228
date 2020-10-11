
const knnClassifier = ml5.KNNClassifier();
var testingSampleIndex = 1
var trainingCompleted = false


function Train(){
  console.log(train0.pick().toString())
  // console.log(test.toString())
  for(var i = 0 ; i < train0.shape[3] ; i++){
    train0.pick(null,null,null,i).toString()
  }
  for(var i = 0 ; i < test.shape[3] ; i++){
    test.pick(null,null,null,i).toString()
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
