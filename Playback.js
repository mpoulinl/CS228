
var oneFrameOfData = nj.array([[[139.62817,732.53159,127.965,139.62817,732.53159,127.965],
        [139.62817,732.53159,127.965,228.47214,737.52539,128.752],
        [228.47214,737.52539,128.752,288.88271,736.21513,131.648],
        [288.88271, 754,131.648,326.78582, 754,124.129]],
       [[139.71532,643.32125,118.854,254.76782,627.22633,88.8442],
        [254.76782,627.22633,88.8442,316.73032,619.41678,67.2817],
        [316.73032,619.41678,67.2817,347.3197,667.39546,56.455],
        [347.3197,667.39546,56.455,362.25821,724.1638,51.0507]],
       [[130.18668,634.9721,109.491,230.16455,619.4315,74.0962],
        [230.16455,619.4315,74.0962,293.65533,604.55313,46.431],
        [293.65533,604.55313,46.431,330.30469,654.87369,33.0796],
        [330.30469,654.87369,33.0796,349.43833,713.85785,27.5629]],
       [[118.56432,639.12706,100.6,197.37583,626.06372,62.6576],
        [197.37583,626.06372,62.6576,250.0423,610.72424,34.0919],
        [250.0423,610.72424,34.0919,284.24414,655.30047,19.5718],
        [284.24414,655.30047,19.5718,304.15302,710.17431,13.2573]],
       [[104.54319,672.56977,93.0492,166.29674,651.80285,53.3977],
        [166.29674,651.80285,53.3977,199.88083,644.15519,27.7799],
        [199.88083,644.15519,27.7799,222.3194,676.70511,16.792],
        [222.3194,676.70511,16.792,241.28849,726.54051,11.135]]]);

var anotherFrameDate = nj.array([[[ 610.27843,  492.8579,    178.21, 610.27843,  492.8579,    178.21],
        [ 610.27843,  492.8579,    178.21, 411.88934, 430.68591,   148.386],
        [ 411.88934, 430.68591,   148.386, 275.01436, 387.97001,   128.208],
        [ 275.01436, 387.97001,   128.208, 171.14046, 356.92001,   115.917]],
       [[  662.7657, 389.96323,   178.668, 501.79417,  238.9156,   127.712],
        [ 501.79417,  238.9156,   127.712, 441.31838, 234.40316,   92.5379],
        [ 441.31838, 234.40316,   92.5379,  407.8882, 246.81098,   72.8516],
        [  407.8882, 246.81098,   72.8516,  384.7878, 262.76231,   59.1282]],
       [[  731.4126, 376.66954,    175.22, 634.27586, 231.27491,   124.437],
        [ 634.27586, 231.27491,   124.437, 593.39857, 220.79387,   84.3071],
        [ 593.39857, 220.79387,   84.3071,  564.3695, 232.79197,   60.8105],
        [  564.3695, 232.79197,   60.8105, 543.13164, 249.06997,   45.5483]],
       [[ 801.80718, 378.41914,   171.694, 771.19142, 249.44093,   124.586],
        [ 771.19142, 249.44093,   124.586,   770.669, 231.60711,   87.1189],
        [   770.669, 231.60711,   87.1189, 760.99728, 240.36622,    63.895],
        [ 760.99728, 240.36622,    63.895, 750.05319, 255.78049,   48.4914]],
       [[   868.689, 413.66599,   167.478, 891.31842, 288.54135,   124.334],
        [ 891.31842, 288.54135,   124.334, 932.43482, 277.05816,   95.1932],
        [ 932.43482, 277.05816,   95.1932, 941.88627, 285.51829,   78.8542],
        [ 941.88627, 285.51829,   78.8542, 941.67251, 302.10634,   64.6592]]]);


var frameIndex = 0;
function draw(){
  clear();
  for(var i = 0 ; i < 5 ; i++){
    for(var j = 0 ; j < 4 ; j++){
      //x
      var xStart = oneFrameOfData.get(i,j,0);
      var yStart = oneFrameOfData.get(i,j,1);
      var zStart = oneFrameOfData.get(i,j,2);
      var xEnd = oneFrameOfData.get(i,j,3);
      var yEnd = oneFrameOfData.get(i,j,4);
      var zEnd = oneFrameOfData.get(i,j,5);

      var xStart_a = anotherFrameDate.get(i,j,0);
      var yStart_a = anotherFrameDate.get(i,j,1);
      var zStart_a = anotherFrameDate.get(i,j,2);
      var xEnd_a = anotherFrameDate.get(i,j,3);
      var yEnd_a = anotherFrameDate.get(i,j,4);
      var zEnd_a = anotherFrameDate.get(i,j,5);

      if(frameIndex === 0){
        line(xStart,yStart,zStart,xEnd,yEnd,zEnd);
      }
      else if(x % 2 ===0){
        line(xStart,yStart,zStart,xEnd,yEnd,zEnd);
      }
      else{
        line(xStart_a,yStart_a,zStart_a,xEnd_a,yEnd_a,zEnd_a);
      }

    }
  }
}
