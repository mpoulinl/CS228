const knnClassifier = ml5.KNNClassifier();
var testingSampleIndex = 1
var trainingCompleted = false
irisData = nj.array([[	5.1	,	3.5	,	1.4	,	0.2	,	0	],
[	4.9	,	3	,	1.4	,	0.2	,	0	],
[	4.7	,	3.2	,	1.3	,	0.2	,	0	],
[	4.6	,	3.1	,	1.5	,	0.2	,	0	],
[	5	,	3.6	,	1.4	,	0.2	,	0	],
[	5.4	,	3.9	,	1.7	,	0.4	,	0	],
[	4.6	,	3.4	,	1.4	,	0.3	,	0	],
[	5	,	3.4	,	1.5	,	0.2	,	0	],
[	4.4	,	2.9	,	1.4	,	0.2	,	0	],
[	4.9	,	3.1	,	1.5	,	0.1	,	0	],
[	5.4	,	3.7	,	1.5	,	0.2	,	0	],
[	4.8	,	3.4	,	1.6	,	0.2	,	0	],
[	4.8	,	3	,	1.4	,	0.1	,	0	],
[	4.3	,	3	,	1.1	,	0.1	,	0	],
[	5.8	,	4	,	1.2	,	0.2	,	0	],
[	5.7	,	4.4	,	1.5	,	0.4	,	0	],
[	5.4	,	3.9	,	1.3	,	0.4	,	0	],
[	5.1	,	3.5	,	1.4	,	0.3	,	0	],
[	5.7	,	3.8	,	1.7	,	0.3	,	0	],
[	5.1	,	3.8	,	1.5	,	0.3	,	0	],
[	5.4	,	3.4	,	1.7	,	0.2	,	0	],
[	5.1	,	3.7	,	1.5	,	0.4	,	0	],
[	4.6	,	3.6	,	1	,	0.2	,	0	],
[	5.1	,	3.3	,	1.7	,	0.5	,	0	],
[	4.8	,	3.4	,	1.9	,	0.2	,	0	],
[	5	,	3	,	1.6	,	0.2	,	0	],
[	5	,	3.4	,	1.6	,	0.4	,	0	],
[	5.2	,	3.5	,	1.5	,	0.2	,	0	],
[	5.2	,	3.4	,	1.4	,	0.2	,	0	],
[	4.7	,	3.2	,	1.6	,	0.2	,	0	],
[	4.8	,	3.1	,	1.6	,	0.2	,	0	],
[	5.4	,	3.4	,	1.5	,	0.4	,	0	],
[	5.2	,	4.1	,	1.5	,	0.1	,	0	],
[	5.5	,	4.2	,	1.4	,	0.2	,	0	],
[	4.9	,	3.1	,	1.5	,	0.1	,	0	],
[	5	,	3.2	,	1.2	,	0.2	,	0	],
[	5.5	,	3.5	,	1.3	,	0.2	,	0	],
[	4.9	,	3.1	,	1.5	,	0.1	,	0	],
[	4.4	,	3	,	1.3	,	0.2	,	0	],
[	5.1	,	3.4	,	1.5	,	0.2	,	0	],
[	5	,	3.5	,	1.3	,	0.3	,	0	],
[	4.5	,	2.3	,	1.3	,	0.3	,	0	],
[	4.4	,	3.2	,	1.3	,	0.2	,	0	],
[	5	,	3.5	,	1.6	,	0.6	,	0	],
[	5.1	,	3.8	,	1.9	,	0.4	,	0	],
[	4.8	,	3	,	1.4	,	0.3	,	0	],
[	5.1	,	3.8	,	1.6	,	0.2	,	0	],
[	4.6	,	3.2	,	1.4	,	0.2	,	0	],
[	5.3	,	3.7	,	1.5	,	0.2	,	0	],
[	5	,	3.3	,	1.4	,	0.2	,	0	],
[	7	,	3.2	,	4.7	,	1.4	,	1	],
[	6.4	,	3.2	,	4.5	,	1.5	,	1	],
[	6.9	,	3.1	,	4.9	,	1.5	,	1	],
[	5.5	,	2.3	,	4	,	1.3	,	1	],
[	6.5	,	2.8	,	4.6	,	1.5	,	1	],
[	5.7	,	2.8	,	4.5	,	1.3	,	1	],
[	6.3	,	3.3	,	4.7	,	1.6	,	1	],
[	4.9	,	2.4	,	3.3	,	1	,	1	],
[	6.6	,	2.9	,	4.6	,	1.3	,	1	],
[	5.2	,	2.7	,	3.9	,	1.4	,	1	],
[	5	,	2	,	3.5	,	1	,	1	],
[	5.9	,	3	,	4.2	,	1.5	,	1	],
[	6	,	2.2	,	4	,	1	,	1	],
[	6.1	,	2.9	,	4.7	,	1.4	,	1	],
[	5.6	,	2.9	,	3.6	,	1.3	,	1	],
[	6.7	,	3.1	,	4.4	,	1.4	,	1	],
[	5.6	,	3	,	4.5	,	1.5	,	1	],
[	5.8	,	2.7	,	4.1	,	1	,	1	],
[	6.2	,	2.2	,	4.5	,	1.5	,	1	],
[	5.6	,	2.5	,	3.9	,	1.1	,	1	],
[	5.9	,	3.2	,	4.8	,	1.8	,	1	],
[	6.1	,	2.8	,	4	,	1.3	,	1	],
[	6.3	,	2.5	,	4.9	,	1.5	,	1	],
[	6.1	,	2.8	,	4.7	,	1.2	,	1	],
[	6.4	,	2.9	,	4.3	,	1.3	,	1	],
[	6.6	,	3	,	4.4	,	1.4	,	1	],
[	6.8	,	2.8	,	4.8	,	1.4	,	1	],
[	6.7	,	3	,	5	,	1.7	,	1	],
[	6	,	2.9	,	4.5	,	1.5	,	1	],
[	5.7	,	2.6	,	3.5	,	1	,	1	],
[	5.5	,	2.4	,	3.8	,	1.1	,	1	],
[	5.5	,	2.4	,	3.7	,	1	,	1	],
[	5.8	,	2.7	,	3.9	,	1.2	,	1	],
[	6	,	2.7	,	5.1	,	1.6	,	1	],
[	5.4	,	3	,	4.5	,	1.5	,	1	],
[	6	,	3.4	,	4.5	,	1.6	,	1	],
[	6.7	,	3.1	,	4.7	,	1.5	,	1	],
[	6.3	,	2.3	,	4.4	,	1.3	,	1	],
[	5.6	,	3	,	4.1	,	1.3	,	1	],
[	5.5	,	2.5	,	4	,	1.3	,	1	],
[	5.5	,	2.6	,	4.4	,	1.2	,	1	],
[	6.1	,	3	,	4.6	,	1.4	,	1	],
[	5.8	,	2.6	,	4	,	1.2	,	1	],
[	5	,	2.3	,	3.3	,	1	,	1	],
[	5.6	,	2.7	,	4.2	,	1.3	,	1	],
[	5.7	,	3	,	4.2	,	1.2	,	1	],
[	5.7	,	2.9	,	4.2	,	1.3	,	1	],
[	6.2	,	2.9	,	4.3	,	1.3	,	1	],
[	5.1	,	2.5	,	3	,	1.1	,	1	],
[	5.7	,	2.8	,	4.1	,	1.3	,	1	],
[	6.3	,	3.3	,	6	,	2.5	,	2	],
[	5.8	,	2.7	,	5.1	,	1.9	,	2	],
[	7.1	,	3	,	5.9	,	2.1	,	2	],
[	6.3	,	2.9	,	5.6	,	1.8	,	2	],
[	6.5	,	3	,	5.8	,	2.2	,	2	],
[	7.6	,	3	,	6.6	,	2.1	,	2	],
[	4.9	,	2.5	,	4.5	,	1.7	,	2	],
[	7.3	,	2.9	,	6.3	,	1.8	,	2	],
[	6.7	,	2.5	,	5.8	,	1.8	,	2	],
[	7.2	,	3.6	,	6.1	,	2.5	,	2	],
[	6.5	,	3.2	,	5.1	,	2	,	2	],
[	6.4	,	2.7	,	5.3	,	1.9	,	2	],
[	6.8	,	3	,	5.5	,	2.1	,	2	],
[	5.7	,	2.5	,	5	,	2	,	2	],
[	5.8	,	2.8	,	5.1	,	2.4	,	2	],
[	6.4	,	3.2	,	5.3	,	2.3	,	2	],
[	6.5	,	3	,	5.5	,	1.8	,	2	],
[	7.7	,	3.8	,	6.7	,	2.2	,	2	],
[	7.7	,	2.6	,	6.9	,	2.3	,	2	],
[	6	,	2.2	,	5	,	1.5	,	2	],
[	6.9	,	3.2	,	5.7	,	2.3	,	2	],
[	5.6	,	2.8	,	4.9	,	2	,	2	],
[	7.7	,	2.8	,	6.7	,	2	,	2	],
[	6.3	,	2.7	,	4.9	,	1.8	,	2	],
[	6.7	,	3.3	,	5.7	,	2.1	,	2	],
[	7.2	,	3.2	,	6	,	1.8	,	2	],
[	6.2	,	2.8	,	4.8	,	1.8	,	2	],
[	6.1	,	3	,	4.9	,	1.8	,	2	],
[	6.4	,	2.8	,	5.6	,	2.1	,	2	],
[	7.2	,	3	,	5.8	,	1.6	,	2	],
[	7.4	,	2.8	,	6.1	,	1.9	,	2	],
[	7.9	,	3.8	,	6.4	,	2	,	2	],
[	6.4	,	2.8	,	5.6	,	2.2	,	2	],
[	6.3	,	2.8	,	5.1	,	1.5	,	2	],
[	6.1	,	2.6	,	5.6	,	1.4	,	2	],
[	7.7	,	3	,	6.1	,	2.3	,	2	],
[	6.3	,	3.4	,	5.6	,	2.4	,	2	],
[	6.4	,	3.1	,	5.5	,	1.8	,	2	],
[	6	,	3	,	4.8	,	1.8	,	2	],
[	6.9	,	3.1	,	5.4	,	2.1	,	2	],
[	6.7	,	3.1	,	5.6	,	2.4	,	2	],
[	6.9	,	3.1	,	5.1	,	2.3	,	2	],
[	5.8	,	2.7	,	5.1	,	1.9	,	2	],
[	6.8	,	3.2	,	5.9	,	2.3	,	2	],
[	6.7	,	3.3	,	5.7	,	2.5	,	2	],
[	6.7	,	3	,	5.2	,	2.3	,	2	],
[	6.3	,	2.5	,	5	,	1.9	,	2	],
[	6.5	,	3	,	5.2	,	2	,	2	],
[	6.2	,	3.4	,	5.4	,	2.3	,	2	],
[	5.9	,	3	,	5.1	,	1.8	,	2	]]);

var numSamples = irisData.shape;
var numRows = numSamples[0];
var numFeatures = numSamples[1] - 1;
predictedClassLabels = nj.zeros(numSamples)

function practice(){
  for(var i = 0 ; i < numRows ; i++){
    console.log(predictedClassLabels.pick(i).toString());
  }
}


function Train(){
  for(var i = 0 ; i < numRows ; i = i+2){
    var currentFeatures = irisData.pick(i).slice([0,2])
    var currentLabel = irisData.pick(i).get(4)
    knnClassifier.addExample(currentFeatures.tolist(),currentLabel)
  }
}

function Test(){
    var currentFeatures = irisData.pick(testingSampleIndex).slice([0,2])
    var currentLabel = irisData.pick(testingSampleIndex).get(4)
    predictLabel = knnClassifier.classify(currentFeatures.tolist(), GotResults);
}

function GotResults(err, result){
  console.log(result);
  testingSampleIndex = testingSampleIndex + 2;
  if(testingSampleIndex > numRows){
    testingSampleIndex = 1;
  }
}
function DrawCircles(){
    for(var i = 0 ; i < numRows; i++){
      var currentFeatures = irisData.pick(i).slice([0,2])
      var currentLabel = irisData.pick(i).get(4)

        var x = currentFeatures.get(0)
        var y = currentFeatures.get(1)

        circle(x*100,y*100,8)


        if(currentLabel==0){
          fill("red")
        }
        else if (currentLabel==1) {
          fill("green")
        }
        else{
          fill("blue")
        }

        if(i%2 ==0){//testing sample
          if(currentLabel==0){
            stroke("red")
          }
          else if (currentLabel==1) {
            stroke("green")
          }
          else{
            stroke("blue")
          }
        }
        else{//training sample
          stroke("black")
        }
      }

}
var l = true
function draw(){
  clear();
  practice()
  // if(trainingCompleted == false){
  //   Train();
  //   trainingCompleted = true;
  // }
  // Test()
  // DrawCircles();

}
