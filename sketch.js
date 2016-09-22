//Esta variable será nuestra serpiente
var pj;
//variable para el tamaño inicial de nuestra serpiente y de la comida
var scl = 20;
//variable para la comida (cuando la serpiente come algo crece)
var food;

function setup() {
	//creamos nuestro canvas(pantalla de juego)
	createCanvas(600, 600);
	//Creamos una serpiente
	pj = new Snake();
	//Cambiamos el framerate para que la serpiente se mueva mas despacio
	frameRate(10);
	//posicionamos la comida al iniciar la partida
	pickLocation();
}

//Funcion para fijar la posicion de filas y columnas
function pickLocation(){
	var columns = floor(width/scl);
	var rows = floor(height/scl);

	//hacemos aparecer la comida en una posicion aleatoria
	food = createVector(floor(random(columns)), floor(random(rows)));
	food.mult(scl);
}

//función para dibujar
function draw() {
	//Dibujamos el fondo del canvas
	background(51);
	//Monstramos la serpiente
	pj.show();
	//comprobamos si ha muerto
	pj.death();
	//Actualizamos su posición
	pj.update();

	if(pj.eat(food)){
		pickLocation();
	}
	//pintamos la comida
	fill(125,125,0);
	rect(food.x, food.y, scl, scl);
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
