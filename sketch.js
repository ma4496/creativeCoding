
	let xLocGrass;
	let xVineLoc;
	let yVineLoc;
	let flower;
	let butterfly;
	let xSquirrelHead;
	let ySquirrelHead;
	let xSquirrelBody;
	let ySquirrelBody;
	let xAcorn;
	let yAcorn;

function setup() {
	createCanvas(1000, 600);
	flower = new Flower ();
	butterfly = new Butterfly();
	this.xSquirrelHead = 0;
	this.ySquirrelHead = 518;
	this.xSquirrelBody = -10;
	this.ySquirrelBody = 530;
	this.xAcorn = 320;
	this.yAcorn = 311;


}

function draw() {
	background(193, 231, 245);
	mushrooms();
	grassBlade();
	vines();
	flowers();
	squirrel();
	acorn();
	butterflys();
	
}


// butterflys:

function butterflys(){
	
	frameRate(3); // slower frame rate
	
	push();
	rotate(0.4); // tilting 
	translate(50 + random(20, -20), -250 + random(20, -20)); // repositioning after rotating and adding movement 
	butterfly.display();
	pop();
	
	push();
	scale(1.5);
	rotate(-0.4);
	translate(-370 + random(20, -20) , 100 + random(20, -20));
	butterfly.display();
	pop();
	
	push();
	scale(0.6);
	rotate(-0.2);
	translate(290 + random(20, -20), 480 + random(20, -20));
	butterfly.display();
	pop();
	
}


// flowers:

function flowers(){ 
	flower.display(100, 50);
	flower.display(50, 150);
	flower.display(200, 30);
	flower.display(800, 30);
	flower.display(890, 50);
	flower.display(960, 140);
	flower.display(950, 240);
	flower.display(930, 340);
}

// Mushrooms:

function mushrooms(){ // collection of mushroom sub functions 
	mushroomStem1();
	mushroomStem2();
	mushroomStem3();
	mushroomTop1();
	mushroomTop2();
	mushroomTop3();
	mushroomDots();
}

function mushroomStem1() {
	fill(245, 237, 171);
	noStroke();
	beginShape();
	vertex(230, 600);
	bezierVertex(250, 320, 290, 280, 390, 600);
	endShape();
}

function mushroomStem2() {
	fill(245, 237, 171);
	noStroke();
	beginShape();
	vertex(140, 600);
	bezierVertex(130, 500, 250, 430, 170, 600);
	endShape();
}

function mushroomStem3() {
	fill(245, 237, 171);
	noStroke();
	beginShape();
	vertex(410, 600);
	bezierVertex(300, 360, 490, 430, 430, 600);
	endShape();
}

function mushroomTop1() {
	fill(244, 126, 121);
	noStroke();
	beginShape();
	vertex(105, 375);
	bezierVertex(200, 500, 300, 400, 420, 390);
	endShape();
	ellipse(280, 360, 370, 100);
}

function mushroomTop2() {
	fill(244, 126, 121);
	noStroke();
	beginShape();
	vertex(110, 490);
	bezierVertex(185, 610, 285, 510, 250, 490);
	endShape();
	ellipse(185, 500, 150, 80);
}

function mushroomTop3() {
	fill(244, 126, 121);
	noStroke();
	beginShape();
	vertex(330, 470);
	bezierVertex(400, 400, 500, 400, 497, 460);
	endShape();
	ellipse(400, 470, 200, 90);
}

function mushroomDots(){
	fill(245, 237, 171, 200);
	noStroke();
	
	//for muchsroomTop1
	circle(380, 375, 30);
	circle(350, 340, 30);
	circle(260, 400, 30);
	circle(200, 415, 30);
	circle(310, 380, 30);
	circle(430, 360, 30);
	circle(300, 332, 30);
	circle(260, 358, 30);
	circle(220, 330, 30);
	circle(210, 375, 30);
	circle(170, 350, 30);
	circle(120, 360, 30);
	circle(160, 390, 30);
	
	//for mushroomTop2
	circle(180, 475, 20);
	circle(145, 485, 20);
	circle(165, 505, 20);
	circle(130, 510, 20);
	circle(185, 530, 20);
	circle(200, 500, 20);
	circle(225, 520, 20);
	circle(245, 500, 20);
	circle(220, 482, 20);
	
	//for mushroomTop3
	circle(445, 435, 25);
	circle(478, 450, 25);
	circle(455, 480, 25);
	circle(415, 460, 25);
	circle(405, 495, 25);
	circle(380, 445, 25);
	circle(360, 480, 25);
	circle(330, 460, 25);
}

// Grass:
 
function grassBlade(){
	fill(157, 222, 140); // green
	for(xLocGrass = 0; xLocGrass <= width; xLocGrass= xLocGrass + 10){
	ellipse(xLocGrass, 600, 10, 45);
	}
}

// Squirrel:

function squirrel(){ // collection of squirrel functions
	squirrelHead();
	squirrelBody();
}

function squirrelHead(){
	// Head:
	fill(200); // gray
	ellipse(this.xSquirrelHead, this.ySquirrelHead, 37, 40);
	
	// Ear:
	fill(185); //gray
	circle(this.xSquirrelHead -10, this.ySquirrelHead - 16, 15);
	
	// Nose:
	fill(185);
	circle(this.xSquirrelHead + 17, this.ySquirrelHead, 5);
	
	// Eye:
	fill(40);
	circle(this.xSquirrelHead + 8, this.ySquirrelHead - 8, 7);
	
	fill(255);
	circle(this.xSquirrelHead + 9, this.ySquirrelHead - 9, 2);
		
	
	this.xSquirrelHead = this.xSquirrelHead + 10; // moving across screen
	
	if(this.xSquirrelHead > 290){ // moving up 
		this.xSquirrelHead = 290;
		this.ySquirrelHead = this.ySquirrelHead - 20;
	}
	
	if(this.xSquirrelHead === 290 && this.ySquirrelHead < 238){ // ending position with heart reaction 
		this.ySquirrelHead = 238;
		hearts();
	}

}

function squirrelBody(){
	
	// Body:
	fill(200);
	beginShape();
	vertex(this.xSquirrelBody, this.ySquirrelBody);
	bezierVertex(this.xSquirrelBody - 50, this.ySquirrelBody + 90, this.xSquirrelBody + 50, this.ySquirrelBody + 90, this.xSquirrelBody + 20, this.ySquirrelBody);
	endShape();
	
	// Leg:
	fill(185);
	beginShape();
	vertex(this.xSquirrelBody, this.ySquirrelBody + 70);
	bezierVertex(this.xSquirrelBody - 20, this.ySquirrelBody + 20, this.xSquirrelBody + 20, this.ySquirrelBody + 20, this.xSquirrelBody + 10, this.ySquirrelBody + 70);
	endShape();
	
	// Foot:
	fill(185);
	ellipse(this.xSquirrelBody + 10, this.ySquirrelBody + 65, 25, 10);
	
	// Arm:
	fill(185);
	//push();
	//rotate(-0.3);
	//translate(-95, 80);
	ellipse(this.xSquirrelBody + 30, this.ySquirrelBody + 20, 25, 10);
	//pop();
	
	//Tail:
	beginShape();
	vertex(this.xSquirrelBody - 10, this.ySquirrelBody + 60);
	bezierVertex(this.xSquirrelBody - 100, this.ySquirrelBody - 10, this.xSquirrelBody - 20, this.ySquirrelBody - 10, this.xSquirrelBody - 10, this.ySquirrelBody + 60);
	endShape();
	
	this.xSquirrelBody = this.xSquirrelBody + 10; // moving across the screen
	
	if(this.xSquirrelBody > 280){ // moving up
		this.xSquirrelBody = 280;
		this.ySquirrelBody = this.ySquirrelBody - 20;
	}
	
	if(this.ySquirrelBody < 270){ // acorn moving up
		this.yAcorn = this.yAcorn - 20;
	}
	
	if(this.xSquirrelBody === 280 && this.ySquirrelBody < 250){ // ending position holding acorn
		this.ySquirrelBody = 250;
		this.yAcorn = 266;
	}
}

// Acorn:

function acorn(){ 
	fill(222, 125, 60);
	ellipse(this.xAcorn, this.yAcorn, 8, 15);
	fill(245, 170, 79);
	ellipse(this.xAcorn, this.yAcorn - 6, 10, 7);
	ellipse(this.xAcorn, this.yAcorn - 11, 2, 5);
}

// Heart:

function hearts(){
	fill(245, 183, 234);
	bezier(320, 213, 305, 200, 305, 210, 320, 230);
	bezier(320, 213, 335, 200, 335, 210, 320, 230);
}


// vines:

function vines(){
	noFill();
	strokeWeight(3);
	stroke(222, 148, 71); // light brown 
	vineCluster1();
	vineCluster2();
	vineCluster3();
}

function vineCluster1(){ // right side vines 
	subVine1();
	subVine2();
	vineCurl1();
}

function subVine1(){ //first curve alternating on right side of sketch
	for ( yVineLoc = 0; yVineLoc > -400 ; yVineLoc = yVineLoc - 150){
		bezier(950 , 450 + yVineLoc, 975, 425 + yVineLoc, 975, 400 + yVineLoc, 950, 375 + yVineLoc); 
	}
}

function subVine2(){ // second curve alternating on right side of sketch
	for ( yVineLoc = 0; yVineLoc > -300 ; yVineLoc = yVineLoc - 150){
		bezier(950, 375 + yVineLoc, 925, 350 + yVineLoc, 925, 325 + yVineLoc, 950, 300 + yVineLoc);
	}
}

function vineCurl1(){ // curl in right corner
	bezier(950, 75, 870 , 0, 1000, 10, 900, 50); 
}

function vineCluster2(){ // right top vines
	subVine3();
	subVine4();
	subVine5();
}

function subVine3(){
	bezier(900, 50, 875, 75, 850, 75, 825, 50);
}

function subVine4(){
		bezier(825, 50, 800, 25, 775, 25, 750, 50);
}

function subVine5(){
	bezier(750, 50, 725, 75, 700, 75, 675, 50);
}

function vineCluster3(){ //left corner vines 
	vineCurl2();
	subVine5();
	subVine6();
	subVine7();
	subVine8();
}

function vineCurl2(){ // curl in left corner
	bezier(50, 75, 130 , 0, 0, 10, 100, 50)
}

function subVine5(){
	bezier(50, 75, 25, 100, 25, 125, 50, 150);
}

function subVine6(){
	bezier(50, 150, 75, 175, 75, 200, 50, 225);
}

function subVine7(){
	bezier(100, 50, 125, 75, 150, 75, 175, 50);
}

function subVine8(){
	bezier(175, 50, 200, 25, 225, 25, 250, 50);
}