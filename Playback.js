
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
        [222.3194,676.70511,16.792,241.28849,726.54051,11.135]]])
function draw(){
  clear();
  for(var i = 0 ; i < 5 ; i++){
    for(var j = 0 ; j < 4 ; j++){
      console.log(oneFrameOfData.get(i,j,1));
    }
  }
  console.log(oneFrameOfData);
}
