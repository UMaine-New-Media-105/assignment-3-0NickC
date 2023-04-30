function setup() {

}

function draw() {
  background("skyblue");

  addAnt(mouseX,350, 0.5);
}


function addAnt(x, y, size){
  push();
  translate(x, y);
  scale(size);
  fill("brown")
  //I reused the code from my A2Q2 for the head of my ant sprite
  beginShape();
  vertex(20,0);
  vertex(20,40);
  vertex(50,40);
  vertex(50,0);
  vertex(70, 60);
  vertex(35, 90);
  vertex(0, 60);
  vertex(20,0);
  endShape();
  //the body of the ant sprite 
  triangle(0, 100, 35, 90, 70, 100);
  pop();
}
