console.log('Abstract with Bezier');

  
function setup() {
  //createCanvas(1280, 720);
 createCanvas(2000, 1750);
  background(0);
  colorMode(HSB);
  stroke(20,100,100);
  noFill();

  }

let t =100;
function draw(){

  let x1 = width * noise(t + 0);
  let x2 = width * noise(t + 600);
  let x3 = width * noise(t + 800);
  let x4 = width * noise(t + 50);
  let y1 = height * noise(t + 0);
  let y2 = height * noise(t + 275);
  let y3 = height * noise(t + 500);
  let y4 = height * noise(t + 700);
  let z1 = height * noise(t + 300);
  let z2 = height * noise(t + 20);
  let z3 = height * noise(t + 800);
  let z4 = height * noise(t + 700);

  bezier(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4);
  

  t += 0.007;
  
  // clear the background every 500 frames using mod (%) operator
  if (frameCount % 700 == 0) {
    background(0);
    }

}
  function mousePressed(){
    save('image.png');
  }
  

//credit: https://editor.p5js.org/d_ritter@cfmtschools.net/sketches/55Vvo2kjZ