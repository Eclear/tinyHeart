/**
 * Created by Vincent on 2018/5/22.
 */
var momObj = function () {
    this.x;
    this.y;
    this.bigEye = new Image();
    this.bigBody = new Image();
    this.bigTail = new Image();
}
momObj.prototype.init = function(){
    this.x = 0;
    this.y = 0;
    this.bigEye.src = "./src/bigEye0.png";
    this.bigBody.src = "./src/bigSwim0.png";
    this.bigTail.src = "./src/bigTail0.png";
}
momObj.prototype.draw = function () {
    ctx1.save();
    ctx1.translate(this.x,this.y);   //set base point for big fish
    ctx1.drawImage(this.bigEye,-this.bigEye.width * 0.5, -this.bigEye.height * 0.5);
    ctx1.drawImage(this.bigBody,-this.bigBody.width * 0.5, -this.bigBody.height * 0.5);
    ctx1.drawImage(this.bigTail,-this.bigTail.width * 0.5 + 30, -this.bigTail.height * 0.5);

    ctx1.restore();

}