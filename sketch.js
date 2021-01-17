/*var player,playerimg,form,bgimg,bgimg2,role,cafe,cafeimg,standImg,rect1,rect2,rect3,rect4,rect5,rect6,rect7,rect8,ledge,redge,tedge,bedge;
var name=null;
var gameState='start';
var Usebutton,Rbutton,useimg;
var room1img,room1,task1,x,y,z,task1ans,answer,task1text;
var room2img,room2,room3img,room3,room4img,room4;
function preload(){
    bgimg=loadImage('BG.png')
    playerimg=loadAnimation('walk2.png','walk3.png','walk4.png','walk5.png')
    cafeimg=loadImage('cafe.png')
    standImg=loadImage('walk1.png')
    room1img=loadImage('room1.png')
    useimg=loadImage('Use.png')
    room2img=loadImage('room2.jpg')
    room3img=loadImage('ROOM3.jpg')
    room4img=loadImage('room4.jpg')
}
function setup(){
    
    createCanvas(displayWidth,displayHeight);
    form=new Form();
    if (gameState==='start'){
        
        background(bgimg)
       
        form.display()
        console.log("gamestate is start");
       
    }
   
    ledge=createSprite(0,displayHeight/2,1,displayHeight)
    redge=createSprite(displayWidth,displayHeight/2,1,displayHeight)
    tedge=createSprite(displayWidth/2,0,displayWidth,1)
    bedge=createSprite(displayWidth/2,displayHeight,displayWidth,1)
    room1=createSprite(displayWidth-200,160,10,10)
    room2=createSprite(displayWidth/2-570,160,10,10)
    room3=createSprite(displayWidth/2-570,700,10,10)
    room4=createSprite(displayWidth-200,750,10,10)
    room4.addImage(room4img)
    room4.scale=1.3
    room2.addImage(room2img)
    room3.addImage(room3img)
    room3.scale=0.8
    room2.scale=0.6
        room1.scale=1.2
        
        room1.addImage(room1img)
        rect1=createSprite(390,150,10,600)
        rect2=createSprite(390,displayHeight-150,10,300)
        rect3=createSprite(1150,250,10,500)
        rect4=createSprite(1150,displayHeight-100,10,200)
        
        rect5=createSprite(150,440,300,10)
        rect6=createSprite(150,displayHeight-346,300,10)
        rect7=createSprite(1350,displayHeight-250,200,10)
        rect8=createSprite(1300,500,300,10)
        task1sprite=createSprite(displayHeight-150,160,10,10)
        task1sc=createSprite(10,230,300,300)
        Usebutton=createSprite(100,200,100,100)
        x=Math.round(random(1,1000))
        y=Math.round(random(1,9))
        z=Math.round(random(1,89))
        answer=createInput().attribute("placeholder", "Write the numbers given above");
       // answer.visible=false
        
        answer.size(200)
        Usebutton.addImage(useimg)
        task1text=createElement('h3');
        //task1text.position(displayHeight/2,displayWidth/2)
        task1text.html(x+y+z)
        //answer.position(displayHeight/2,displayWidth/2)
        
        Usebutton.scale=0.3
        task1sc.visible=false
        task1sc.shapeColor='green'
        rect1.visible=false
        rect2.visible=false
        rect3.visible=false
        rect4.visible=false
        rect5.visible=false
        rect6.visible=false
        rect7.visible=false
        rect8.visible=false
        room1.visible=false
        room2.visible=false
        room3.visible=false
        room4.visible=false
        Usebutton.visible=false

   
    
}
function draw(){
    background(bgimg)
    
   
    if (gameState==='play'){
       
        play()
        Usebutton.x=camera.position.x+500
        Usebutton.y=camera.position.y+200
        player.depth=cafe.depth+1
        room1.depth=player.depth-1
        Usebutton.depth=cafe.depth+1
        
        player.collide(rect1)
        player.collide(rect2)
        player.collide(rect3)
        player.collide(rect4)
        player.collide(rect5)
        player.collide(rect6)
        player.collide(rect7)
        player.collide(rect8)
        rect1.visible=true
        rect2.visible=true
        rect3.visible=true
        rect4.visible=true
        rect5.visible=true
        rect6.visible=true
        rect7.visible=true
        rect8.visible=true
        room1.visible=true
        room2.visible=true
        room3.visible=true
        room4.visible=true
     //console.log(task1sprite.position)

    if(player.x> 1042&& y<190 && mousePressedOver( Usebutton) ) {
        task1()
   }
        
       

        

    }
    
    drawSprites()
    
    
     
   
    if(gameState==='play'){
        fill('white')
        text(name,player.x-10,player.y-50)
        textSize(20)
        text('You are : '+role,camera.position.x-100,camera.position.y-400)
        player.bounceOff(redge)
        player.bounceOff(ledge)
        player.bounceOff(tedge)
        player.bounceOff(bedge)
        task1sc.x=camera.position.x
    task1sc.y=camera.position.y
    task1text.position(camera.position.x,camera.position.y)
   
    answer.position(camera.position.x,camera.position.y+100)
   
        
    }
}
function getRole(){
    player=createSprite(displayWidth/2,displayHeight/2,20,20);
    player.addImage("stand",standImg);
    player.addAnimation('running',playerimg);

    player.scale=.5
    var rand = Math.round(random(1,3));
    switch(rand) {
   //   case 1: role='IMPOSTER';
   //           break;
        case 1:role='CrewMate'
        break;
      case 2: role='CrewMate';
              break;
      case 3: role='CrewMate';
              break;
    default:break;
    }
    
}
function play(){
    Usebutton.visible=true
    player.changeImage("stand",standImg);
    camera.position.x=player.x
    camera.position.y=player.y
    
    textSize(50)
    
   


    if(keyDown("w")) {
      
        player.y = player.y-3;
        player.changeAnimation('running',playerimg);
      }
      if (keyDown("s")) {
        
       player.y =player.y + 3;
       player.changeAnimation('running',playerimg);
        
      }
      if (keyDown("d")) {
       
      player.x=player.x+ 3;
      player.changeAnimation('running',playerimg);
     
      }
      if (keyDown("a")) {
        
        player.x=player.x -3;
        player.changeAnimation('running',playerimg);
    }
    

}
function task1(){
    console.log("task is called");
    task1sc.visible=true
    task1sc.depth=player.depth+1
    

  
    
    // answer.visible=true
    
    //console.log(answer.value())
    
    
    
    
    
    

    console.log(answer.value());
    if(keyCode === 13){
        console.log("enter is clicked");
        task1ans=answer.value()
        console.log(task1ans)
    //    console.log("x+y+z: "+x+y+z);
        if (task1ans==x+y+z){
        
          console.log("task is completed");
          
            
        }
    }
  
}*/
var player,playerimg,form,bgimg,bgimg2,role,cafe,cafeimg,standImg,rect1,rect2,rect3,rect4,rect5,rect6,rect7,rect8,ledge,redge,tedge,bedge;	
var name=null;	
var solution;
var gameState='start';	
var Usebutton,Rbutton,useimg;	
var room1img,room1,task1,x,y,z,task1ans,answer,task1text;	
var room2img,room2,room3img,room3,room4img,room4;	
function preload(){	
    bgimg=loadImage('BG.png')	
    playerimg=loadAnimation('walk2.png','walk3.png','walk4.png','walk5.png')	
    cafeimg=loadImage('cafe.png')	
    standImg=loadImage('walk1.png')	
    room1img=loadImage('room1.png')	
    useimg=loadImage('Use.png')	
    room2img=loadImage('room2.jpg')	
    room3img=loadImage('ROOM3.jpg')	
    room4img=loadImage('room4.jpg')	
}	
function setup(){	
    	
    createCanvas(displayWidth,displayHeight);	
    form=new Form();	
    if (gameState==='start'){	
        	
        background(bgimg)	
       	
        form.display()	
        console.log("gamestate is start");	
       	
    }	
   	
    ledge=createSprite(0,displayHeight/2,1,displayHeight)	
    redge=createSprite(displayWidth,displayHeight/2,1,displayHeight)	
    tedge=createSprite(displayWidth/2,0,displayWidth,1)	
    bedge=createSprite(displayWidth/2,displayHeight,displayWidth,1)	
    room1=createSprite(displayWidth-200,160,10,10)	
    room2=createSprite(displayWidth/2-570,160,10,10)	
    room3=createSprite(displayWidth/2-570,700,10,10)	
    room4=createSprite(displayWidth-200,750,10,10)	
    room4.addImage(room4img)	
    room4.scale=1.3	
    room2.addImage(room2img)	
    room3.addImage(room3img)	
    room3.scale=0.8	
    room2.scale=0.6	
        room1.scale=1.2	
        	
        room1.addImage(room1img)	
        rect1=createSprite(390,150,10,600)	
        rect2=createSprite(390,displayHeight-150,10,300)	
        rect3=createSprite(1150,250,10,500)	
        rect4=createSprite(1150,displayHeight-100,10,200)	
        	
        rect5=createSprite(150,440,300,10)	
        rect6=createSprite(150,displayHeight-346,300,10)	
        rect7=createSprite(1350,displayHeight-250,200,10)	
        rect8=createSprite(1300,500,300,10)	
        task1sprite=createSprite(displayHeight-150,160,10,10)	
      //  task1sc=createSprite(10,230,300,300)	
        Usebutton=createSprite(100,200,100,100)	
        x=Math.round(random(1,1000))	
        y=Math.round(random(1,9))	
        z=Math.round(random(1,89))	
         solution =x.toString()+y.toString()+z.toString();
         result = solution*2;
        console.log("solution  "+solution);
        console.log("original value"+x+y+z);
        answer=createInput().attribute("placeholder", "Write the numbers given above");	
       // answer.visible=false	
        Usebutton.addImage(useimg)	
        task1text=createElement('h3');	
        	
        Usebutton.scale=0.3	
     //   task1sc.visible=false	
     //   task1sc.shapeColor='green'	
        rect1.visible=false	
        rect2.visible=false	
        rect3.visible=false	
        rect4.visible=false	
        rect5.visible=false	
        rect6.visible=false	
        rect7.visible=false	
        rect8.visible=false	
        room1.visible=false	
        room2.visible=false	
        room3.visible=false	
        room4.visible=false	
        Usebutton.visible=false	
   	
    	
}	
function draw(){	
   // background(bgimg)	
    	
   	
    if (gameState==='play'){	
       	
        play()	
        Usebutton.x=camera.position.x+500	
        Usebutton.y=camera.position.y+200	
        player.depth=cafe.depth+1	
        room1.depth=player.depth-1	
        Usebutton.depth=cafe.depth+1	
        	
        player.collide(rect1)	
        player.collide(rect2)	
        player.collide(rect3)	
        player.collide(rect4)	
        player.collide(rect5)	
        player.collide(rect6)	
        player.collide(rect7)	
        player.collide(rect8)	
        rect1.visible=true	
        rect2.visible=true	
        rect3.visible=true	
        rect4.visible=true	
        rect5.visible=true	
        rect6.visible=true	
        rect7.visible=true	
        rect8.visible=true	
        room1.visible=true	
        room2.visible=true	
        room3.visible=true	
        room4.visible=true	
     //console.log(task1sprite.position)	
    if(player.x> 1042&& y<190 && mousePressedOver( Usebutton) ) {	
        task1()	
        
   }	
  
    }	
    console.log("before enter"+x+y+z)
if(keyCode === 13 && gameState==='pause'){	
    console.log("enter is clicked");	
    task1ans=answer.value()	
    console.log(task1ans)
   
    if (task1ans==result){	
        
      console.log("task is completed");	
        gameState='play'
        task1text.visible=false
        answer.visible=false
            
    }	
        	
       	
        	
    }	
    	
    drawSprites()	
    	
    	
     	
   	
    if(gameState==='play'){	
        fill('white')	
        textSize(20)
        text(name,player.x-10,player.y-50)	
        textSize(20)	
        text('You are : '+role,camera.position.x-100,camera.position.y-400)	
        player.bounceOff(redge)	
        player.bounceOff(ledge)	
        player.bounceOff(tedge)	
        player.bounceOff(bedge)	
       // task1sc.x=camera.position.x	
    //task1sc.y=camera.position.y	
        	
    }	
}	
function getRole(){	
    player=createSprite(displayWidth/2,displayHeight/2,20,20);	
    player.addImage("stand",standImg);	
    player.addAnimation('running',playerimg);	
    player.scale=.5	
    var rand = Math.round(random(1,3));	
    switch(rand) {	
   //   case 1: role='IMPOSTER';	
   //           break;	
        case 1:role='CrewMate'	
        break;	
      case 2: role='CrewMate';	
              break;	
      case 3: role='CrewMate';	
              break;	
    default:break;	
    }	
    	
}	
function play(){	
    Usebutton.visible=true	
    player.changeImage("stand",standImg);	
    camera.position.x=player.x	
    camera.position.y=player.y	
    	
    textSize(50)	
    	
   	
    if(keyDown("w")) {	
      	
        player.y = player.y-3;	
        player.changeAnimation('running',playerimg);	
      }	
      if (keyDown("s")) {	
        	
       player.y =player.y + 3;	
       player.changeAnimation('running',playerimg);	
        	
      }	
      if (keyDown("d")) {	
       	
      player.x=player.x+ 3;	
      player.changeAnimation('running',playerimg);	
     	
      }	
      if (keyDown("a")) {	
        	
        player.x=player.x -3;	
        player.changeAnimation('running',playerimg);	
    }	
    	
}	
function task1(){	
    gameState='pause'
    player.changeImage("stand",standImg);	   

    console.log("task is called");	
    //task1sc.visible=true	
   // task1sc.depth=player.depth+1	
    	
  	
    	
     answer.visible=true	
    answer.position(displayWidth/2,displayHeight/2+100)	
    console.log(answer.value())	
    answer.size(200)	
    	
    	
    	
    
    task1text.html("What is "+x+y+z+"x2")	
    task1text.position(displayWidth/2,displayHeight/2)	
  //  console.log(answer.value());	
    
  	
}