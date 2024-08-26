//variaveisdabola
let xBola =300;
let yBola =200;
let diametro =30;
let raio = diametro / 2;

//velocidadedabola
let velocidadeXBola=6;
let velocidadeyBola=6;

//variaveis da raquete
let xRaquete=5;
let yRaquete=150;
let raqueteCompri=10;
let raqueteAltu=90;

//variaveis do oponente
let xRaqueOp = 585;
let yRaqueOp = 150;
let veloYOPp;




function mostraRaqueteOp(){
  rect(xRaqueOp, yRaqueOp, raqueteCompri, raqueteAltu);
}



function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBola();
  movimentaBola();
 colisão();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
verificaColisaoRaquete();
  mostraRaquete(xRaqueOp, yRaqueOp);
  moviRaqueOp();
  
    function mostraBola(){  circle(xBola, yBola, diametro);
}

function movimentaBola(){
   xBola += velocidadeXBola;
  yBola += velocidadeyBola;
}

function colisão(){
  if (xBola + raio  >  width || xBola - raio < 0){
    velocidadeXBola *= -1;
  }
  
   if (yBola + raio >  height || yBola - raio < 0){
    velocidadeyBola *= -1;}
}
}

function mostraRaquete(x, y){
  rect(x, y, raqueteCompri, raqueteAltu);
}
function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }
}

function verificaColisaoRaquete() {
    if (xBola - raio < xRaquete + raqueteCompri
       && yBola - raio < yRaquete + raqueteAltu && yBola + raio > yRaquete) {
        velocidadeXBola *= -1;}
}


function moviRaqueOp(){
  veloYOp = yBola - yRaqueOp - raqueteCompri / 2 - 30;
  yRaqueOp += veloYOp
}


