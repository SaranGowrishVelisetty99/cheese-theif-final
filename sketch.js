var gameState = 1, score = 0, scoresound, portalsound, gameover, gameoverimg;

var tom, tom2, tom3, tom4, tom5, tom6, jerry;
var cheeseimg, portalimg, jerryimg, tomimg;

var portal1, portal2;

var wall1, wall2, wall3, wall4, maze1, maze2, maze3, maze4, maze5, maze6, maze7, maze8 , maze9, maze10, maze11, maze12, maze13,
    maze14, maze15, maze16, maze17, maze18, maze19, maze20, maze21, maze22, maze23, maze24, maze25, maze26, maze27, maze28, maze29,
    maze30, maze31, maze32, maze33, maze34, maze35, maze36, maze37, maze38, maze39, maze40, maze41, maze42;

var cheese1, cheese2, cheese3, cheese4, cheese5, cheese6, cheese7, cheese8, cheese9, cheese10, cheese11, cheese12, cheese13,
    cheese14, cheese15, cheese16, cheese17, cheese18, cheese19, cheese20, cheese21, cheese22, cheese23, cheese24, cheese25, 
    cheese26, cheese27, cheese28, cheese29, cheese30, cheese31, cheese32, cheese33, cheese34, cheese35, cheese36, cheese37,
    cheese38, cheese39, cheese40, cheese41, cheese42, cheese43, cheese44, cheese45, cheese46, cheese47, cheese48, cheese49,
    cheese50;

function preload(){
    gameoverimg = loadImage("game over.jpg")
    cheeseimg = loadImage("cheese.png");
    portalimg = loadImage("portal.png");
    jerryimg = loadImage("jerry.png");
    tomimg = loadImage('tom.png');
    scoresound = loadSound('score.mp3');
    portalsound = loadSound('portal.mp3');
}

function setup(){
    createCanvas(displayWidth,displayHeight);
    wall1 = createSprite(100,400, 10, 550);
    wall1.shapeColor = "white";

    wall2 = createSprite(748,125, 1300, 10);
    wall2.shapeColor = "white";

    wall3 = createSprite(1395,400, 10, 550);
    wall3.shapeColor = "white";

    wall4 = createSprite(748, 675, 1300, 10);
    wall4.shapeColor = "white";

    maze1 = createSprite(200, 200, 10, 150);
    maze1.shapeColor = "white";

    maze2 = createSprite(300, 300, 10, 150);
    maze2.shapeColor = "white";

    maze3 = createSprite(400, 200, 10, 150);
    maze3.shapeColor = "white";

    maze4 = createSprite(500, 300, 10, 150);
    maze4.shapeColor = "white";

    maze5 = createSprite(348, 378, 500, 10);
    maze5.shapeColor = "white";

    maze6 = createSprite(200, 450, 100, 10);
    maze6.shapeColor = "white";

    maze7 = createSprite(152, 525, 10, 150);
    maze7.shapeColor = "white";

    maze8 = createSprite(200, 600, 100, 10);
    maze8.shapeColor = "white";

    maze9 = createSprite(300, 525, 10, 150);
    maze9.shapeColor = "white";

    maze10 = createSprite(350, 540, 100 ,10);
    maze10.shapeColor = "white";

    maze11 = createSprite(400, 525, 10, 150);
    maze11.shapeColor = "white";

    maze12 = createSprite(500, 525, 10, 150);
    maze12.shapeColor = "white";

    maze13 = createSprite(550, 452, 100, 10);
    maze13.shapeColor = "white";

    maze14 = createSprite(550, 530, 100, 10);
    maze14.shapeColor = "white";

    maze15 = createSprite(550, 598, 100, 10);
    maze15.shapeColor = "white";

    maze16 = createSprite(680, 525, 10, 150);
    maze16.shapeColor = "white";

    maze17 = createSprite(730, 452, 100 , 10);
    maze17.shapeColor = "white";

    maze18 = createSprite(730, 530, 100, 10);
    maze18.shapeColor = "white";

    maze19 = createSprite(730, 598, 100, 10);
    maze19.shapeColor = "white";

    maze20 = createSprite(900, 450, 100, 10);
    maze20.shapeColor = "white";

    maze21 = createSprite(850, 486, 10, 75);
    maze21.shapeColor = "white";

    maze22 = createSprite(900, 522, 100, 10);
    maze22.shapeColor = "white";

    maze23 = createSprite(948, 560, 10, 75);
    maze23.shapeColor = "white";

    maze24 = createSprite(900, 598, 100, 10);
    maze24.shapeColor = "white";

    maze25 = createSprite(1000, 525, 10, 150);
    maze25.shapeColor = "white";

    maze26 = createSprite(1050, 452, 100 , 10);
    maze26.shapeColor = "white";

    maze27 = createSprite(1050, 530, 100, 10);
    maze27.shapeColor = "white";

    maze28 = createSprite(1050, 598, 100, 10);
    maze28.shapeColor = "white";

    maze29 = createSprite(700, 200, 150, 10);
    maze29.shapeColor = "white";

    maze30 = createSprite(700, 278, 10, 150);
    maze30.shapeColor = "white";

    maze31 = createSprite(830, 278, 10, 150);
    maze31.shapeColor = "white";

    maze32 = createSprite(880, 278, 100, 10);
    maze32.shapeColor = "white";

    maze33 = createSprite(928, 278, 10, 150);
    maze33.shapeColor = "white";

    maze34 = createSprite(1000, 278, 10, 150);
    maze34.shapeColor = "white";

    maze35 = createSprite(1048, 205, 100, 10);
    maze35.shapeColor = "white";

    maze36 = createSprite(1048, 278, 100, 10);
    maze36.shapeColor = "white";

    maze37 = createSprite(1048, 354, 100, 10);
    maze37.shapeColor = "white";

    maze38 = createSprite(1170, 278, 10, 150);
    maze38.shapeColor = "white";

    maze39 = createSprite(1250, 278, 10, 150);
    maze39.shapeColor = "white";

    maze40 = createSprite(1300, 205, 100, 10);
    maze40.shapeColor = "white";

    maze41 = createSprite(1300, 278, 100, 10);
    maze41.shapeColor = "white";

    maze42 = createSprite(1290, 500, 200, 10);
    maze42.shapeColor = "white";

    cheese1 = createSprite(150, 300);
    cheese1.addImage(cheeseimg);
    cheese1.scale = 0.1;

    cheese2 = createSprite(250, 200);
    cheese2.addImage(cheeseimg);
    cheese2.scale = 0.1;

    cheese3 = createSprite(250, 300);
    cheese3.addImage(cheeseimg);
    cheese3.scale = 0.1;

    cheese4 = createSprite(350, 200);
    cheese4.addImage(cheeseimg);
    cheese4.scale = 0.1;

    cheese5 = createSprite(350, 300);
    cheese5.addImage(cheeseimg);
    cheese5.scale = 0.1;

    cheese6 = createSprite(450, 200);
    cheese6.addImage(cheeseimg);
    cheese6.scale = 0.1;

    cheese7 = createSprite(450, 300);
    cheese7.addImage(cheeseimg);
    cheese7.scale = 0.1;

    cheese8 = createSprite(550, 200);
    cheese8.addImage(cheeseimg);
    cheese8.scale = 0.1;

    cheese9 = createSprite(550, 300);
    cheese9.addImage(cheeseimg);
    cheese9.scale = 0.1;

    cheese10 = createSprite(650, 160);
    cheese10.addImage(cheeseimg);
    cheese10.scale = 0.1;

    cheese11 = createSprite(750, 160);
    cheese11.addImage(cheeseimg);
    cheese11.scale = 0.1;

    cheese12 = createSprite(850, 160);
    cheese12.addImage(cheeseimg);
    cheese12.scale = 0.1;

    cheese13 = createSprite(950, 160);
    cheese13.addImage(cheeseimg);
    cheese13.scale = 0.1;

    cheese14 = createSprite(1050, 160);
    cheese14.addImage(cheeseimg);
    cheese14.scale = 0.1;

    cheese15 = createSprite(1150, 160);
    cheese15.addImage(cheeseimg);
    cheese15.scale = 0.1;

    cheese16 = createSprite(1250, 160);
    cheese16.addImage(cheeseimg);
    cheese16.scale = 0.1;

    cheese17 = createSprite(1350, 160);
    cheese17.addImage(cheeseimg);
    cheese17.scale = 0.1;

    cheese18 = createSprite(650, 300);
    cheese18.addImage(cheeseimg);
    cheese18.scale = 0.1;

    cheese19 = createSprite(750, 300);
    cheese19.addImage(cheeseimg);
    cheese19.scale = 0.1;

    cheese20 = createSprite(880, 230);
    cheese20.addImage(cheeseimg);
    cheese20.scale = 0.1;

    cheese21 = createSprite(880, 330);
    cheese21.addImage(cheeseimg);
    cheese21.scale = 0.1;

    cheese22 = createSprite(1050, 310);
    cheese22.addImage(cheeseimg);
    cheese22.scale = 0.1;

    cheese23 = createSprite(1300, 310);
    cheese23.addImage(cheeseimg);
    cheese23.scale = 0.1;

    cheese24 = createSprite(150, 410);
    cheese24.addImage(cheeseimg);
    cheese24.scale = 0.1;

    cheese25 = createSprite(250, 410);
    cheese25.addImage(cheeseimg);
    cheese25.scale = 0.1;

    cheese26 = createSprite(350, 410);
    cheese26.addImage(cheeseimg);
    cheese26.scale = 0.1;

    cheese27 = createSprite(450, 410);
    cheese27.addImage(cheeseimg);
    cheese27.scale = 0.1;

    cheese28 = createSprite(550, 410);
    cheese28.addImage(cheeseimg);
    cheese28.scale = 0.1;

    cheese29 = createSprite(650, 410);
    cheese29.addImage(cheeseimg);
    cheese29.scale = 0.1;

    cheese30 = createSprite(750, 410);
    cheese30.addImage(cheeseimg);
    cheese30.scale = 0.1;

    cheese31 = createSprite(850, 410);
    cheese31.addImage(cheeseimg);
    cheese31.scale = 0.1;

    cheese32 = createSprite(950, 410);
    cheese32.addImage(cheeseimg);
    cheese32.scale = 0.1;

    cheese33 = createSprite(1050, 410);
    cheese33.addImage(cheeseimg);
    cheese33.scale = 0.1;

    cheese34 = createSprite(1150, 410);
    cheese34.addImage(cheeseimg);
    cheese34.scale = 0.1;

    cheese35 = createSprite(1250, 410);
    cheese35.addImage(cheeseimg);
    cheese35.scale = 0.1;

    cheese36 = createSprite(1359, 410);
    cheese36.addImage(cheeseimg);
    cheese36.scale = 0.1;

    cheese37 = createSprite(350, 490);
    cheese37.addImage(cheeseimg);
    cheese37.scale = 0.1;

    cheese38 = createSprite(550, 490);
    cheese38.addImage(cheeseimg);
    cheese38.scale = 0.1;

    cheese39 = createSprite(740, 490);
    cheese39.addImage(cheeseimg);
    cheese39.scale = 0.1;

    cheese40 = createSprite(890, 560);
    cheese40.addImage(cheeseimg);
    cheese40.scale = 0.1;

    cheese41 = createSprite(1050, 490);
    cheese41.addImage(cheeseimg);
    cheese41.scale = 0.1;

    cheese42 = createSprite(150, 640);
    cheese42.addImage(cheeseimg);
    cheese42.scale = 0.1;

    cheese43 = createSprite(250, 640);
    cheese43.addImage(cheeseimg);
    cheese43.scale = 0.1;

    cheese44 = createSprite(350, 640);
    cheese44.addImage(cheeseimg);
    cheese44.scale = 0.1;

    cheese45 = createSprite(450, 640);
    cheese45.addImage(cheeseimg);
    cheese45.scale = 0.1;

    cheese46 = createSprite(550, 640);
    cheese46.addImage(cheeseimg);
    cheese46.scale = 0.1;

    cheese47 = createSprite(650, 640);
    cheese47.addImage(cheeseimg);
    cheese47.scale = 0.1;

    cheese48 = createSprite(750, 640);
    cheese48.addImage(cheeseimg);
    cheese48.scale = 0.1;

    cheese49 = createSprite(850, 640);
    cheese49.addImage(cheeseimg);
    cheese49.scale = 0.1;

    cheese50 = createSprite(950, 640);
    cheese50.addImage(cheeseimg);
    cheese50.scale = 0.1;

    portal1 = createSprite(1050, 240);
    portal1.addImage(portalimg);
    portal1.scale = 0.3;
    portal1.setCollider("circle", 0, 0, 100);

    portal2 = createSprite(200, 530);
    portal2.addImage(portalimg);
    portal2.scale = 0.3;
    portal2.setCollider("circle", 0, 0, 100);

    jerry = createSprite(150, 200);
    jerry.addImage(jerryimg);
    jerry.scale = 0.18;
    jerry.setCollider("circle", 0, 0, 100);

    tom = createSprite(1350, 640);
    tom.addImage(tomimg);
    tom.scale = 0.2;
    tom.setCollider("rectangle", 0, 0, 400, 300);

    tom2 = createSprite(1350, 410);
    tom2.addImage(tomimg);
    tom2.scale = 0.2;
    tom2.setCollider("rectangle", 0, 0, 400, 300);

    tom3 = createSprite(150, 410);
    tom3.addImage(tomimg);
    tom3.scale = 0.2;
    tom3.setCollider("rectangle", 0, 0, 400, 300);

    tom4 = createSprite(450, 170);
    tom4.addImage(tomimg);
    tom4.scale = 0.2;
    tom4.setCollider("rectangle", 0, 0, 400, 300);

    tom5 = createSprite(1350, 170);
    tom5.addImage(tomimg);
    tom5.scale = 0.2;
    tom5.setCollider("rectangle", 0, 0, 400, 300);

    tom6 = createSprite(150, 640);
    tom6.addImage(tomimg);
    tom6.scale = 0.2;
    tom6.setCollider("rectangle", 0, 0, 400, 300);

    gameover = createSprite(700, 450);
    gameover.addImage(gameoverimg);
    gameover.visible = false;

}

async function draw(){
    background("#46f2c1");
    drawSprites();
    createEdgeSprites();

    fill("red");
    textSize(30);
    text("SCORE: "+score, 150, 100);

    if(gameState == 1)
    {

    if(keyDown("w")){
        jerry.y -= 8;
    }

    if(keyDown("s")){
        jerry.y += 8;
    }

    if(keyDown("a")){
        jerry.x -= 8;
    }

    if(keyDown("d")){
        jerry.x += 8;
    }

    if(jerry.isTouching(cheese1)){
        cheese1.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese2)){
        cheese2.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese3)){
        cheese3.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese4)){
        cheese4.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese5)){
        cheese5.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese6)){
        cheese6.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese7)){
        cheese7.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese8)){
        cheese8.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese9)){
        cheese9.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese10)){
        cheese10.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese11)){
        cheese11.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese12)){
        cheese12.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese13)){
        cheese13.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese14)){
        cheese14.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese15)){
        cheese15.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese16)){
        cheese16.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese17)){
        cheese17.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese18)){
        cheese18.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese19)){
        cheese19.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese20)){
        cheese20.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese21)){
        cheese21.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese22)){
        cheese22.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese23)){
        cheese23.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese24)){
        cheese24.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese25)){
        cheese25.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese26)){
        cheese26.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese27)){
        cheese27.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese28)){
        cheese28.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese29)){
        cheese29.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese30)){
        cheese30.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese31)){
        cheese31.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese32)){
        cheese32.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese33)){
        cheese33.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese34)){
        cheese34.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese35)){
        cheese35.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese36)){
        cheese36.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese37)){
        cheese37.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese38)){
        cheese38.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese39)){
        cheese39.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese40)){
        cheese40.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese41)){
        cheese41.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese42)){
        cheese42.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese43)){
        cheese43.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese44)){
        cheese44.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese45)){
        cheese45.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese46)){
        cheese46.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese47)){
        cheese47.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese48)){
        cheese48.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese49)){
        cheese49.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(cheese50)){
        cheese50.destroy();
        score += 5;
        scoresound.play();
    }

    if(jerry.isTouching(portal1)){
        jerry.x = 290;
        jerry.y = 530;
        portalsound.play();
    }

    if(jerry.isTouching(portal2)){
        jerry.x = 1150;
        jerry.y = 240;
        portalsound.play();
    }

    if(frameCount == 50){
        tom.velocityX = -10;
        tom.velocityY =  0;
    }

    if(frameCount == 50){
        tom2.velocityX = -10;
        tom2.velocityY =  0;
    }

    if(frameCount == 50){
        tom3.velocityX = 10;
        tom3.velocityY = 0;
    }

    if(frameCount == 50){
        tom4.velocityX = 10;
        tom4.velocityY = 0;
    }

    if(frameCount == 50){
        tom5.velocityX = -10;
        tom5.velocityY =  0;
    }

    if(frameCount == 50){
        tom6.velocityX = 10;
        tom6.velocityY = 0;
    }

    if(jerry.isTouching(tom) || jerry.isTouching(tom2) || jerry.isTouching(tom3) || jerry.isTouching(tom4) || jerry.isTouching(tom5) || jerry.isTouching(tom6))
    {
        location.reload();
    }

    if(score == 250){
        gameState = 0;
    }

    jerry.bounceOff(wall1);
    jerry.bounceOff(wall2);
    jerry.bounceOff(wall3);
    jerry.bounceOff(wall4);
    jerry.bounceOff(maze1);
    jerry.bounceOff(maze2);
    jerry.bounceOff(maze3);
    jerry.bounceOff(maze4);
    jerry.bounceOff(maze5);
    jerry.bounceOff(maze6);
    jerry.bounceOff(maze7);
    jerry.bounceOff(maze8);
    jerry.bounceOff(maze9);
    jerry.bounceOff(maze10);
    jerry.bounceOff(maze11);
    jerry.bounceOff(maze12);
    jerry.bounceOff(maze13);
    jerry.bounceOff(maze14);
    jerry.bounceOff(maze15);
    jerry.bounceOff(maze16);
    jerry.bounceOff(maze17);
    jerry.bounceOff(maze18);
    jerry.bounceOff(maze19);
    jerry.bounceOff(maze20);
    jerry.bounceOff(maze21);
    jerry.bounceOff(maze22);
    jerry.bounceOff(maze23);
    jerry.bounceOff(maze24);
    jerry.bounceOff(maze25);
    jerry.bounceOff(maze26);
    jerry.bounceOff(maze27);
    jerry.bounceOff(maze28);
    jerry.bounceOff(maze29);
    jerry.bounceOff(maze30);
    jerry.bounceOff(maze31);
    jerry.bounceOff(maze32);
    jerry.bounceOff(maze33);
    jerry.bounceOff(maze34);
    jerry.bounceOff(maze35);
    jerry.bounceOff(maze36);
    jerry.bounceOff(maze37);
    jerry.bounceOff(maze38);
    jerry.bounceOff(maze39);
    jerry.bounceOff(maze40);
    jerry.bounceOff(maze41);
    jerry.bounceOff(maze42);
    tom.bounceOff(wall1);
    tom.bounceOff(wall2);
    tom.bounceOff(wall3);
    tom.bounceOff(wall4);
    tom.bounceOff(maze1);
    tom.bounceOff(maze2);
    tom.bounceOff(maze3);
    tom.bounceOff(maze4);
    tom.bounceOff(maze5);
    tom.bounceOff(maze6);
    tom.bounceOff(maze7);
    tom.bounceOff(maze8);
    tom.bounceOff(maze9);
    tom.bounceOff(maze10);
    tom.bounceOff(maze11);
    tom.bounceOff(maze12);
    tom.bounceOff(maze13);
    tom.bounceOff(maze14);
    tom.bounceOff(maze15);
    tom.bounceOff(maze16);
    tom.bounceOff(maze17);
    tom.bounceOff(maze18);
    tom.bounceOff(maze19);
    tom.bounceOff(maze20);
    tom.bounceOff(maze21);
    tom.bounceOff(maze22);
    tom.bounceOff(maze23);
    tom.bounceOff(maze24);
    tom.bounceOff(maze25);
    tom.bounceOff(maze26);
    tom.bounceOff(maze27);
    tom.bounceOff(maze28);
    tom.bounceOff(maze29);
    tom.bounceOff(maze30);
    tom.bounceOff(maze31);
    tom.bounceOff(maze32);
    tom.bounceOff(maze33);
    tom.bounceOff(maze34);
    tom.bounceOff(maze35);
    tom.bounceOff(maze36);
    tom.bounceOff(maze37);
    tom.bounceOff(maze38);
    tom.bounceOff(maze39);
    tom.bounceOff(maze40);
    tom.bounceOff(maze41);
    tom2.bounceOff(wall1);
    tom2.bounceOff(wall2);
    tom2.bounceOff(wall3);
    tom2.bounceOff(wall4);
    tom2.bounceOff(maze1);
    tom2.bounceOff(maze2);
    tom2.bounceOff(maze3);
    tom2.bounceOff(maze4);
    tom2.bounceOff(maze5);
    tom2.bounceOff(maze6);
    tom2.bounceOff(maze7);
    tom2.bounceOff(maze8);
    tom2.bounceOff(maze9);
    tom2.bounceOff(maze10);
    tom2.bounceOff(maze11);
    tom2.bounceOff(maze12);
    tom2.bounceOff(maze13);
    tom2.bounceOff(maze14);
    tom2.bounceOff(maze15);
    tom2.bounceOff(maze16);
    tom2.bounceOff(maze17);
    tom2.bounceOff(maze18);
    tom2.bounceOff(maze19);
    tom2.bounceOff(maze20);
    tom2.bounceOff(maze21);
    tom2.bounceOff(maze22);
    tom2.bounceOff(maze23);
    tom2.bounceOff(maze24);
    tom2.bounceOff(maze25);
    tom2.bounceOff(maze26);
    tom2.bounceOff(maze27);
    tom2.bounceOff(maze28);
    tom2.bounceOff(maze29);
    tom2.bounceOff(maze30);
    tom2.bounceOff(maze31);
    tom2.bounceOff(maze32);
    tom2.bounceOff(maze33);
    tom2.bounceOff(maze34);
    tom2.bounceOff(maze35);
    tom2.bounceOff(maze36);
    tom2.bounceOff(maze37);
    tom2.bounceOff(maze38);
    tom2.bounceOff(maze39);
    tom2.bounceOff(maze40);
    tom2.bounceOff(maze41);
    tom2.bounceOff(maze42);
    tom3.bounceOff(wall1);
    tom3.bounceOff(wall2);
    tom3.bounceOff(wall3);
    tom3.bounceOff(wall4);
    tom3.bounceOff(maze1);
    tom3.bounceOff(maze2);
    tom3.bounceOff(maze3);
    tom3.bounceOff(maze4);
    tom3.bounceOff(maze5);
    tom3.bounceOff(maze6);
    tom3.bounceOff(maze7);
    tom3.bounceOff(maze8);
    tom3.bounceOff(maze9);
    tom3.bounceOff(maze10);
    tom3.bounceOff(maze11);
    tom3.bounceOff(maze12);
    tom3.bounceOff(maze13);
    tom3.bounceOff(maze14);
    tom3.bounceOff(maze15);
    tom3.bounceOff(maze16);
    tom3.bounceOff(maze17);
    tom3.bounceOff(maze18);
    tom3.bounceOff(maze19);
    tom3.bounceOff(maze20);
    tom3.bounceOff(maze21);
    tom3.bounceOff(maze22);
    tom3.bounceOff(maze23);
    tom3.bounceOff(maze24);
    tom3.bounceOff(maze25);
    tom3.bounceOff(maze26);
    tom3.bounceOff(maze27);
    tom3.bounceOff(maze28);
    tom3.bounceOff(maze29);
    tom3.bounceOff(maze30);
    tom3.bounceOff(maze31);
    tom3.bounceOff(maze32);
    tom3.bounceOff(maze33);
    tom3.bounceOff(maze34);
    tom3.bounceOff(maze35);
    tom3.bounceOff(maze36);
    tom3.bounceOff(maze37);
    tom3.bounceOff(maze38);
    tom3.bounceOff(maze39);
    tom3.bounceOff(maze40);
    tom3.bounceOff(maze41);
    tom3.bounceOff(maze42);
    tom4.bounceOff(wall1);
    tom4.bounceOff(wall2);
    tom4.bounceOff(wall3);
    tom4.bounceOff(wall4);
    tom4.bounceOff(maze1);
    tom4.bounceOff(maze2);
    tom4.bounceOff(maze3);
    tom4.bounceOff(maze4);
    tom4.bounceOff(maze5);
    tom4.bounceOff(maze6);
    tom4.bounceOff(maze7);
    tom4.bounceOff(maze8);
    tom4.bounceOff(maze9);
    tom4.bounceOff(maze10);
    tom4.bounceOff(maze11);
    tom4.bounceOff(maze12);
    tom4.bounceOff(maze13);
    tom4.bounceOff(maze14);
    tom4.bounceOff(maze15);
    tom4.bounceOff(maze16);
    tom4.bounceOff(maze17);
    tom4.bounceOff(maze18);
    tom4.bounceOff(maze19);
    tom4.bounceOff(maze20);
    tom4.bounceOff(maze21);
    tom4.bounceOff(maze22);
    tom4.bounceOff(maze23);
    tom4.bounceOff(maze24);
    tom4.bounceOff(maze25);
    tom4.bounceOff(maze26);
    tom4.bounceOff(maze27);
    tom4.bounceOff(maze28);
    tom4.bounceOff(maze29);
    tom4.bounceOff(maze30);
    tom4.bounceOff(maze31);
    tom4.bounceOff(maze32);
    tom4.bounceOff(maze33);
    tom4.bounceOff(maze34);
    tom4.bounceOff(maze35);
    tom4.bounceOff(maze36);
    tom4.bounceOff(maze37);
    tom4.bounceOff(maze38);
    tom4.bounceOff(maze39);
    tom4.bounceOff(maze40);
    tom4.bounceOff(maze41);
    tom4.bounceOff(maze42);
    tom5.bounceOff(wall1);
    tom5.bounceOff(wall2);
    tom5.bounceOff(wall3);
    tom5.bounceOff(wall4);
    tom5.bounceOff(maze1);
    tom5.bounceOff(maze2);
    tom5.bounceOff(maze3);
    tom5.bounceOff(maze4);
    tom5.bounceOff(maze5);
    tom5.bounceOff(maze6);
    tom5.bounceOff(maze7);
    tom5.bounceOff(maze8);
    tom5.bounceOff(maze9);
    tom5.bounceOff(maze10);
    tom5.bounceOff(maze11);
    tom5.bounceOff(maze12);
    tom5.bounceOff(maze13);
    tom5.bounceOff(maze14);
    tom5.bounceOff(maze15);
    tom5.bounceOff(maze16);
    tom5.bounceOff(maze17);
    tom5.bounceOff(maze18);
    tom5.bounceOff(maze19);
    tom5.bounceOff(maze20);
    tom5.bounceOff(maze21);
    tom5.bounceOff(maze22);
    tom5.bounceOff(maze23);
    tom5.bounceOff(maze24);
    tom5.bounceOff(maze25);
    tom5.bounceOff(maze26);
    tom5.bounceOff(maze27);
    tom5.bounceOff(maze28);
    tom5.bounceOff(maze29);
    tom5.bounceOff(maze30);
    tom5.bounceOff(maze31);
    tom5.bounceOff(maze32);
    tom5.bounceOff(maze33);
    tom5.bounceOff(maze34);
    tom5.bounceOff(maze35);
    tom5.bounceOff(maze36);
    tom5.bounceOff(maze37);
    tom5.bounceOff(maze38);
    tom5.bounceOff(maze39);
    tom5.bounceOff(maze40);
    tom5.bounceOff(maze41);
    tom5.bounceOff(maze42);
    tom6.bounceOff(wall1);
    tom6.bounceOff(wall2);
    tom6.bounceOff(wall3);
    tom6.bounceOff(wall4);
    tom6.bounceOff(maze1);
    tom6.bounceOff(maze2);
    tom6.bounceOff(maze3);
    tom6.bounceOff(maze4);
    tom6.bounceOff(maze5);
    tom6.bounceOff(maze6);
    tom6.bounceOff(maze7);
    tom6.bounceOff(maze8);
    tom6.bounceOff(maze9);
    tom6.bounceOff(maze10);
    tom6.bounceOff(maze11);
    tom6.bounceOff(maze12);
    tom6.bounceOff(maze13);
    tom6.bounceOff(maze14);
    tom6.bounceOff(maze15);
    tom6.bounceOff(maze16);
    tom6.bounceOff(maze17);
    tom6.bounceOff(maze18);
    tom6.bounceOff(maze19);
    tom6.bounceOff(maze20);
    tom6.bounceOff(maze21);
    tom6.bounceOff(maze22);
    tom6.bounceOff(maze23);
    tom6.bounceOff(maze24);
    tom6.bounceOff(maze25);
    tom6.bounceOff(maze26);
    tom6.bounceOff(maze27);
    tom6.bounceOff(maze28);
    tom6.bounceOff(maze29);
    tom6.bounceOff(maze30);
    tom6.bounceOff(maze31);
    tom6.bounceOff(maze32);
    tom6.bounceOff(maze33);
    tom6.bounceOff(maze34);
    tom6.bounceOff(maze35);
    tom6.bounceOff(maze36);
    tom6.bounceOff(maze37);
    tom6.bounceOff(maze38);
    tom6.bounceOff(maze39);
    tom6.bounceOff(maze40);
    tom6.bounceOff(maze41);
    tom6.bounceOff(maze42);
    }

    if(gameState == 0){
        gameover.visible = true;
        tom.velocityX = 0;
        tom.velocityY = 0;
        tom2.velocityX = 0;
        tom2.velocityY = 0;
        tom3.velocityX = 0;
        tom3.velocityY = 0;
        tom4.velocityX = 0;
        tom4.velocityY = 0;
        tom5.velocityX = 0;
        tom5.velocityY = 0;
        tom6.velocityX = 0;
        tom6.velocityY = 0;
    }
}