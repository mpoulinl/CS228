var controllerOptions = {};
var i = 0;

//function
function HandleFrame(frame){
 clear();

  //one hand over the device
  if(frame.hands.length == 1){

    // first element in the hands
    var hand = frame.hands[0];
    HandleHand(hand);

}

function HandleHand(hand){
   //fingers element
    var fingers = hand.fingers;
    //iterrate each finger
    for(var n = 0; n < fingers.length; n++)
    {
      console.log(fingers[n]);
      //HandleFinger(fingers[n]);

    }
  }

function HandleFinger(finger){
  //only show circle for index
  if(finger.type == 1)
  {
      console.log(fingers[n].tipPosition[0]);
      circle(finger.tipPosition[0]+(window.innerWidth * 0.5),finger.tipPosition[1]+(window.innerHeight * 0.5),50);
  }
}

//infinity loop
Leap.loop(controllerOptions, function(frame)
{

 HandleFrame(frame);



}
