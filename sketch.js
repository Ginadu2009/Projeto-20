var rato1, rato2, rato3, rato4;
var gato1, gato2, gato3, gato4;
var bg;

function preload() {
    //carregue as imagens aqui
    bg=loadImage("images/garden.png");
    rato1=loadImage("images/mouse1.png");
    rato2=loadAnimation("images/mouse2.png","images/mouse3.png");
    rato3=loadImage("images/mouse4.png");
    gato1=loadImage("images/cat1.png");
    gato2=loadAnimation("images/cat2.png","images/cat3.png");
    gato3=loadImage("images/cat4.png");

}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    rato4=createSprite(100,600)
    rato4.addImage("ratoParado",rato1)
    rato4.scale=0.1

    gato4=createSprite(800,600)
    gato4.addImage("gatoParado",gato1)
    gato4.scale=0.1



}

function draw() {

    background(bg);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem

    if (gato4.x-rato4.x<(gato4.width-rato4.width)/2) {
      gato4.velocityX=0
      gato4.addImage("gato",gato3)
      rato4.addImage("rato",rato3)
        gato4.changeAnimation("gato")
        rato4.changeAnimation("rato")
        gato4.x=150
    
    }

    drawSprites();
}


function keyPressed(){

    if(keyCode===LEFT_ARROW){
        gato4.velocityX=-6
        gato4.addAnimation("gatoAndar",gato2)
        rato4.addAnimation("ratoAndar",rato2)
        gato4.changeAnimation("gatoAndar")
        rato4.changeAnimation("ratoAndar")

    }

  //Para mover e alterar a animação, escreva o código aqui


}
