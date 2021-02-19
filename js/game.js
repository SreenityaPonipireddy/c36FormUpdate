class Game{
    constructor(){

    }
     getState(){
         var gameStateref=database.ref('gameState');
         //anonymous function is a function calling within WHERE it is created
         gameStateref.on("value",function(data){
             gameState=data.val();
         })
     }
     
     //Writing back to DB
     update(state){
         //refers to root node-slash symbol
        database.ref('/').update({
            gameState:state
        })
     }

     start(){
         //writing beforehand (abstraction)
         if(gameState===0){
             //-waiting for all players to enter
             player= new Player();
             player.getCount();

             form= new Form();
             form.display();
         }
     }
}