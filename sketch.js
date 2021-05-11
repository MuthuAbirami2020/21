var wall,thickness;
var bullet,speed,weight;



function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  bullet = createSprite (50,200,80,20)
  wall = createSprite (1500,200,60,height/2)
  

  speed = random (223,321)
  weight= random (400,1500)
  thickness = random(22,83)
 bullet.velocityX=speed;

 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor = color(80,80,80)


}

function draw() {
  background("black");  
  
  if (wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
    bullet.velocityX =0 ;
    var deformation = 0.5 * weight * speed * speed/22509;
    if (deformation>180)
    {
      bullet.shapeColor = color (225,0,0);
    }
    if (deformation<180 && deformation>100)
    {
      bullet.shapeColor = color (230,230,0);
    }
    if (deformation<100)
    {
      bullet.shapeColor = color (0,255,0);
    }
    
  }
  //Damage=0.5*bulletWieght*bulletSpeed*bulletSpeed/(ThicknessofWall* ThicknessofWall* ThicknessofWall)


  
wall.display();
  
bullet.display();
  
//wall.display();
  
//wall.display();
//speed.dispaly ();
//thickness.display();
//weight.dispaly();
//Damage.dispaly();

}

function hasCollided (lbullet,lwall){
  bulletRightEdge =lbullet.x +lbulllet.width;
  wallLeftEdge =lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}
  if (hasCollided(bullet,wall)) {
    bullet.velocityX  =0;
    var damage =0.5* weight*speed*speed/(thickness*thickness*thickness);

    if (damage>10){
      wall.shapeColor = color(255,0,0);
    }

    if (damage<10){
      wall.shapeColor = color(0,255,0);
    }
 

  }

