class Food{
    constructor(){
this.image=loadImage("Milk.png")
this.foodStock=20
    }
    getFoodStock(){
    return this.foodStock
    }
    updateFoodStock(foodStock){
    this.foodStock=foodStock;
    }
    deductFood(){}
    display(){
    var x=800
    var y=175
    imageMode(CENTER)
    image(this.image,3000,375,65,65)
    if(this.foodStock!=0){
    for(var i=0;i<this.foodStock;i++){
    if(i%10===0){
     x=90
     y=y+60

    }
    x=x+30
    image(this.image,x,y,65,65)
    }
    }
    }
}