var wall, thickness;

var  bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  
   thickness=random(23,83)

  speed=random(223,321)
  weight=random(30,52)

   bullet.VelocityX = speed;

    hasCollided ();

  bullet=createSprite(50, 200, 50,50)
  wall=createSprite(1500, 200, thickness, height/2);


  function hasCollided (Lbullet, Lwall) 
   {
     bulletRightEdge=lbullet.x +lbullet.width;
     wallLeftEdge=lwall.x;
     if (bulletRightEdge>=wallLeftEdge)
     {
        return true
     }
      return false

   }

   if(hasCollided(bullet,wall))
   {
      bullet.velocityX=0;
      var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

      if (damage>10)
     {
        wall.shapeColor=color(255,0,0);
     }


    if (damage<10)
  {
      wall.shapeColor=colour(0,255,0);
  }


   }



  
}

