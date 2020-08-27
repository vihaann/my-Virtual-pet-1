//Create variables here
var dog,happydDog,database,foodStock,foodS;

function preload(){
  dogimg = loadImage("images/dogImg.png");
  dogimg2 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);

  database = firebase.database();
  foodStock = database.ref('food');

  dog = createSprite(250,280,10,10);
  dog.addImage(dogimg);
  dog.scale = 0.4;
 
}


function draw() {  
background("green");
if(keyWentDown(UP_ARROW)){
  dog.addImage(dogimg2);
}
  drawSprites();
  fill("Black");
  textSize(20);
  stroke(5);
  text("Press Up Arrow Key To Feed Dog milk and then make him happy ",70,100);
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
database.ref('/').update({
  food:x
})
}
