const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg;

function preload(){
backgroundImg = loadImage("sprites/bg.png");

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    
    pig1 = new Pig(700,100);
    pig2 = new Pig(800,100)
    pig3 = new Pig(900,100);

    bird1 = new Bird(200,100);
    bird2 = new Bird(300,100);
    bird3 = new Bird(400,100)

    bird4 = new Bird(200,200);
    bird5 = new Bird(200,300);
    bird6 = new Bird(200,400);
    bird7 = new Bird(200,500);

    bird8 = new Bird(300,200);
    bird9 = new Bird(300,300);
    bird10 = new Bird(300,400);
    bird11 = new Bird(300,500);

    bird12 = new Bird(400,200)
    bird13 = new Bird(400,300)
    bird14 = new Bird(400,400)
    bird15 = new Bird(400,500)

    pig4 = new Pig(700,200);
    pig5 = new Pig(700,300);
    pig6 = new Pig(700,400);
    pig7 = new Pig(700,500);

    pig8 = new Pig(800,200);
    pig9 = new Pig(800,300);
    pig10 = new Pig(800,400);
    pig11 = new Pig(800,500);

    pig12 = new Pig(900,200);
    pig13 = new Pig(900,300);
    pig14 = new Pig(900,400);
    pig15 = new Pig(900,500);




}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
    ground.display();
    pig1.display();
    pig2.display();
    pig3.display();
    pig4.display();
    pig5.display();
    pig6.display();
    pig7.display();
    pig8.display();
    pig9.display();
    pig10.display();
    pig11.display();
    pig12.display();
    pig13.display();
    pig14.display();
    pig15.display();



    bird1.display();
    bird2.display();
    bird3.display();
    bird4.display();
    bird5.display();
    bird6.display();
    bird7.display();
    bird8.display();
    bird9.display();
    bird10.display();
    bird11.display();
    bird12.display();
    bird13.display();
    bird14.display();
    bird15.display();


}