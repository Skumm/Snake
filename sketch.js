//Esta variable será nuestra serpiente
var pj;

function setup() {
	//creamos nuestro canvas(pantalla de juego)
	createCanvas(600, 600);
	//Creamos una serpiente
	pj = new Snake();
}

//función para dibujar
function draw() {
	//Dibujamos el fondo del canvas
	background(51);
	//Monstramos la serpiente
	pj.show();
	//Actualizamos su posición
	pj.update();
}

//Funcion para controlar la tecla que pulsamos
function keyPressed(){
	if(keyCode === UP_ARROW){
		pj.dir(0, -1);
	}else if(keyCode === RIGHT_ARROW){
		pj.dir(1, 0);
	}else if(keyCode === DOWN_ARROW){
		pj.dir(0, 1);
	}else if (keyCode === LEFT_ARROW){
		pj.dir(-1, 0);
	}
}

