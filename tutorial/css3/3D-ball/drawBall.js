function drawBall(){
  this.radius=200;
}

drawBall.prototype={
  angle:function(){
    for (var i = 0; i < 25; i++) {
      var obj={};
      if (i==0) {
        obj.theta=0;
        obj.pphi=0;
      }else if (i<4) {
        obj.theta-Math.PI/6*1;
        obj.phi=Math.PI *2/3;
        num++;
      }else if (i<9) {

      }else if (i<16) {

      }else if (i<21) {

      }
    }
  }
}
