var weapon;
var weaponImg;



var bulletG;
var EnemyG;
var EnemyImg;

var EnemyG2;
var Enemy2Img;

var score = 0;


function preload(){
  weaponImg=loadImage("PaintballGun (1).png");
  EnemyImg=loadImage("Humza.png");
  Enemy2Img=loadImage("Imran.png");


}

function setup() {
  createCanvas(1200,800);
  
 weapon = createSprite(100, 200, 100, 50);

 weapon.addImage("weaponIm",weaponImg);
 weapon.scale=0.5;

bulletG= new Group();
EnemyG= new Group();
EnemyG2= new Group();
}

function draw() {
  background(0,0,0);  

  weapon.y=mouseY;
   Enemy();
    bulletSpawn();
    Enemy2();

for(var i = 0;i<bulletG.maxDepth();i++){
B=bulletG.get(i);
for(var j = 0;j<EnemyG.maxDepth();j++){
E=EnemyG.get(j);
for(var k = 0;k<EnemyG2.maxDepth();k++){
Q=EnemyG2.get(k);

if(E!=null&&B!=null&&E.isTouching(B)){
  EnemyG.remove(E);
  bulletG.remove(B);
  
  E.destroy();
  B.destroy();
score = score +1;

}
if(Q!=null&&B!=null&&Q.isTouching(B)){
  EnemyG2.remove(Q);
  bulletG.remove(B);
  
  Q.destroy();
  B.destroy();
score = score +1;

}
}
}


}

text("Score: "+score,800,750);

  drawSprites();
}

function Enemy(){
if(frameCount %25===0){
  enemy=createSprite(random(200,1100),0,20,20);
  enemy.addImage("EnemyIm", EnemyImg);
  enemy.scale=0.2;
  enemy.velocityY=3;
  enemy.lifetime= 800/3;
  EnemyG.add(enemy);
  
}
}
function bulletSpawn(){
if(keyWentDown("space")){
bullet=createSprite(100,mouseY,10,10);
bullet.velocityX=7;
bullet.lifetime=1200/7;
bulletG.add(bullet);
}


}
function Enemy2(){
  if(frameCount %60===0){
    enemy2=createSprite(random(200,1100),0,20,20);
    enemy2.addImage("EnemyI", Enemy2Img);
    enemy2.scale=0.2;
    enemy2.velocityY=5;
    enemy2.lifetime= 800/3;
    EnemyG2.add(enemy2);
    
  }
}