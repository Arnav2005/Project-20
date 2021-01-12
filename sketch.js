var car,wall;
var speed,weight;


function setup() {
  createCanvas(2000,800);

  //CREATING SPEED AND WEIGHT VARIABLES
  speed = random(50,100);
  weight = random(500,2000);

  //CREATING THE CAR
  car = createSprite(50,400,50,50);
  car.velocityX = speed;


}

function draw() {
  background("black");  

  //CREATING THE WALL
  wall = createSprite(1500,400,60,height/2);


  //IF CONDITION FOR DETECTING THE DAMAGE
if(wall.x-car.x < (car.width+wall.width)/2){
  car.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed/22509;
  if(deformation>180){
    car.shapeColor = color("red");
  }
  if(deformation<180 && deformation>100){
    car.shapeColor = color("yellow");
  }
  if(deformation<100){
    car.shapeColor = color("green");
  }
}

  drawSprites();
}
