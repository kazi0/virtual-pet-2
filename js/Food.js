class Food{
    constructor(){
        this.foodStock = null;
        this.lastFed;
        this.image = loadImage("./images/Milk.png");
    }
    getFoodStock(){
       database.ref('/Food').on("value", (data)=>{
             this.foodStock = data.val();
       })
    }

    updateFoodStock(foodValue){
         database.ref('/').update({
           Food : foodValue
         })
     }

     deductFood(){
         this.foodStock = this.foodStock -1;
     }

     display(){
           imageMode(CENTER);
           image(this.image,650,300,70,70);
           foodObj.getFoodStock();
           if(this.foodStock !== 0){
               var x = 0, y=150;
               
               for(var i =0 ;i<this.foodStock ; i++){
                 
                    x=x+30;
                  if(i % 10 === 0){
                      x=30;
                      y=y+50;
                  }
                   image (this.image,x,y,70,70);
               }
           }
     }
}