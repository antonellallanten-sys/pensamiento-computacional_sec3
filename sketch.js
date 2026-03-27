function setup() {
  createCanvas(500, 700);
  background (245, 235, 210) //color fondo 
  stroke (0);
  strokeWeight (10);
  noFill();
  
  //borde
  rect(0, 0, width, height);
  
  //lineas
  line(170, 0, 170, height);
  line(300, 0, 300, height);
  line(0, 550, width, 550);
  line(0, 200, width, 200);
  line(0, 330, width, 330);
  
  //lineas derecha
  strokeWeight(8);
  
  let size = 67


for (let i = 305; i < 305 + size * 3; i += size) {
  
   for (let j = 200; j < 200 + size * 3; j += size) {
     rect(i, j, size, size);
     
   }
  }
  
  
  
// FIGURAS//
  noStroke();
  
  //azul
  fill(40, 70, 100);
  arc(180, 350, 300, 300, HALF_PI, PI + HALF_PI)
  
  
  
}

