    class Form{
    constructor(){

        
    }
    display(){
        var title = createElement('h2');
        //Will insert something into html form
        title.html("Car Racing Game");
        title.position(750, 20);

        //Used to create an imput box 
        var input = createInput("Name: ");
        input.position(450, 150);

        //Creating button to press
        var button = createButton("Click Me");
        button.position(450, 250);

        button.mousePressed(function(){
            //inbuilt function used to hide
         input.hide();
         button.hide();
        //Keeps track of what value you are entering
         var name=input.value();
         playerCount+=1;
         player.update(name);
         player.updateCount(playerCount);

         var greetings=createElement('h3');
         greetings.html("Hello, "+ name)
         greetings.position(700, 700);

        })
        
    }
    



    }