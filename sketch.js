var dog,foodStock,database
var dogimage,happydogimage
var feedFood,getFood,fedTime,lastFed,foodObj
var foodR;
var foodS;
function preload(){
 dogimage=loadImage("dogImg.png")
 happydogimage=loadImage("dogImg1.png")
}

function setup() {
  database=firebase.database();
	createCanvas(1000, 500);
  foodObj=new Food()
  
 
  dog=createSprite(700,250,50,50)
  dog.scale=0.2
  dog.addImage(dogimage)
  
  foodStock=database.ref('Food');
  foodStock.on("value",readStock)
  
  feed=createButton("feed the dog")
  feed.position(400,110)
  feed.mousePressed(feedDog)
 
  addfeed=createButton("add Food")
  addfeed.position(600,110)
  addfeed.mousePressed(addFood)
}

function draw() {  
background(46,138,89)
foodObj.display();
fill(255,255,254)
textSize(15)
lastFed = hour();
if(lastFed>=12){
text("Last Fed : "+lastFed%12+" PM",450,15)
}
else if(lastFed===0){
text("Last Fed : 12 AM",450,15)
}
else{
text("Last Fed : "+lastFed+" AM",450,15)
}
fill("black")
textSize(15)
text("x : "+mouseX,10,20);
text("y : "+mouseY,10,40);

  drawSprites();
  //add styles here
}
function readStock(data){
foodS=data.val();
foodObj.updateFoodStock(foodS);
console.log(foodS)

}

function writeStock(x){
  if (x<=0){x=0}
  else{x=x-1}
  database.ref('/').update({
    Food:x
  });
}
function feedDog(){
dog.addImage(happydogimage)
foodObj.updateFoodStock(foodObj.getFoodStock()-1)
database.ref('/').update({
  Food:foodObj.getFoodStock(),
  FeedTime:hour()
})
}
function addFood(){
foodS++;
database.ref('/').update({
  Food:foodS
})
}