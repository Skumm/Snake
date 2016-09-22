function Snake(){
	//Damos a la serpiente una posicion y una velocidad inicial
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;

	//Actualizamos nuestra posición cuando llamemos la funcion
	this.update = function(){
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;
	}

	//Funcion para controlar el movimiento en base la tecla pulsada
	this.dir = function(x, y){
		this.xspeed = x;
		this.yspeed = y;
	}

	//dibujamos la serpiente
	this.show = function(){
		//pintamos nuestra serpiente de blanco
		fill(255);
		//Dibujamos un resctangulo que sera nuestra serpiente
		rect(this.x, this.y, 10, 10);
	}
}