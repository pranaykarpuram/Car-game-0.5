class Game{

    constructor(){

    }

    getState(){
        database.ref("gameState").on("value",function(x){
            gameState = x.val();
        })
    }

    updateState(y){
        database.ref("/").update({
            gameState: y 
            
        })
    }


    start(){
        if(gameState === 0){
         player = new Player();
         player.getCount(); 

         form = new Form();
         form.display();
        }
    }
    play(){
        background("white");
        form.greeting.hide();
        form.greeting2.hide();
        textSize(30);
        text("Game Start",width/2-100,height/2-100);
        Player.getPlayerInfo();
        if(allPlayers!==undefined){
            var y = 130;
            for(var plr in allPlayers){
                //console.log(player.index)
                if(plr==="player "+player.index){
                    //console/log("player"+player.index)
                    fill("red");
                }
                else{
                    fill("black");
                }
                text(allPlayers[plr].name+": "+allPlayers[plr].distance,120,y=y+40);
            }
        }
        if(keyDown(UP_ARROW)){
            player.distance+=10;
            player.update();
        }



    }
}