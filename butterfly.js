class Butterfly {
	constructor(){
		
	}
	
	display(){
		noStroke();
		
	// wings:
		fill(216, 163, 245); // purple
		
		push();
		rotate(-0.5);
		translate(-180, 300);
		beginShape();
		vertex(750, 200);
		bezierVertex(800, 150, 800, 250, 750, 200);
		endShape();
		pop();
		
		push();
		rotate(0.5);
		translate(-20, -410);
		beginShape();
		vertex(750, 200);
		bezierVertex(700, 150, 700, 250, 750, 200);
		endShape();
		pop();
		
		push();
		rotate(0.6);
		translate(-42, -477);
		beginShape();
		vertex(750, 200);
		bezierVertex(800, 150, 800, 250, 750, 200);
		endShape();
		pop();
		
		push();
		rotate(-0.6);
		translate(-235, 360);
		beginShape();
		vertex(750, 200);
		bezierVertex(700, 150, 700, 250, 750, 200);
		endShape();
		pop();
		
	// body:
		fill(246, 192, 127); // light orange
		ellipseMode(CENTER);
		ellipse(740, 170, 10, 50);
		
	// Antenna:
		noFill();
		stroke(246, 192, 127);
		strokeWeight(2);
		bezier(740, 150, 735, 135, 750, 115, 760, 125);
		bezier(740, 150, 745, 135, 730, 115, 720, 125);
		
		fill(246, 192, 127); // light orange
		ellipse(760, 125, 7, 7);
		ellipse(720, 125, 7, 7);

	}
	
}