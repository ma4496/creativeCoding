class Flower{
	constructor(){

	}

display(x, y){
	noStroke();
	fill(245, 142, 209);
	this.xLoc = x;
	this.yLoc = y;
	ellipse(this.xLoc + 10, this.yLoc, 15, 15);
	ellipse(this.xLoc - 10, this.yLoc, 15, 15);
	ellipse(this.xLoc + 6, this.yLoc + 10, 15, 15);
	ellipse(this.xLoc - 6, this.yLoc + 10, 15, 15);
	ellipse(this.xLoc, this.yLoc - 8, 15, 15);
	
	fill(245, 237, 113);
	ellipse(this.xLoc, this.yLoc, 15, 15);

	}
}// class end bracket