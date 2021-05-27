$(document).ready(function(){
   draw(90, '.pie-chart1', '#866BBF');
  draw(50, '.pie-chart2', '#8C84BF');
  draw(40, '.pie-chart3','#B7ADD9');
  draw(80, '.pie-chart4','#866BBF');
});

function draw(percent, classname, color){
   var i=1;
    var func1 = setInterval(function(){
      if(i<percent){
          color1(i,classname,color);
          i++;
      } else{
        clearInterval(func1);
      }
    },10);
}
function color1(i, classname,color){
   $(classname).css({
        "background":"conic-gradient("+color+" 0% "+i+"%, #ffffff "+i+"% 100%)"
   });
}

function replay(){
  draw(90, '.pie-chart1', '#866BBF');
 draw(50, '.pie-chart2', '#8C84BF');
 draw(40, '.pie-chart3','#B7ADD9');
 draw(80, '.pie-chart4','#866BBF');
}

history.scrollRestoration = "manual";
