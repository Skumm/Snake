function Snake(){
	//Damos a la serpiente una posicion y una velocidad inicial
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;
	this.total = 0;
	this.tail = [];

	this.death = function(){
		for (var i = 0; i < this.tail.length; i++) {
			var pos = this.tail[i];
			var d = dist(this.x, this.y, pos.x, pos.y);
			if (d < 1) {
				this.total = 0;
				this.tail = [];
				console.log("has muerto");
			}
		}

	}

	//Actualizamos nuestra posición cuando llamemos la funcion
	this.update = function(){
		//Actualizamos el tamaño de la serpiente
		for (var i = 0; i < this.tail.length - 1; i++) {
			this.tail[i] = this.tail[i + 1];
		}
		//Añadimos una cuadricula mas a la serpiente
		this.tail[this.total-1] = createVector(this.x, this.y);

		//Especificamos la velocidad de movimiento de la serpiente
		this.x = this.x + this.xspeed*scl;
		this.y = this.y + this.yspeed*scl;

		/*con constrain especificamos que un valor tiene que estar entre un minimo y un maximo
		* en este caso, decimos que el valor x de nuestro personaje tiene que permanecer
		* entre las coordenadas 0 y el ancho de la pantalla menos lo que mide el ancho del personaje
		* y que el valor y tiene que estar entre 0 y la altura de la pantalla menos la altura del personaje
		*/
		//controlamos la colision con las paredes
		this.x = constrain(this.x, 0 , width-scl);
		this.y = constrain(this.y, 0 , height-scl);

	}

	//funcion para hacer que la serpiente come
	this.eat = function(pos){
		//almacenamos en d la distancia entre la serpiente y la comida
		//dist() calcula la distancia entre dos elementos
		var d = dist(this.x, this.y, pos.x, pos.y);

		if (d < 1) {
			this.total++;
			return true;
		}else{
			return false;
		}
	}

	//Funcion para controlar el movimiento en base la tecla pulsada
	this.dir = function(x, y){
		this.xspeed = x;
		this.yspeed = y;
	}


	//dibujamos la serpiente
	this.show = function(){
		//pintamos nuestra serpiente de blanco
		fill(255,255,0);
		for (var i = 0; i < this.tail.length; i++) {
			rect(this.tail[i].x, this.tail[i].y, scl, scl);
		}
		//Dibujamos un resctangulo que sera nuestra serpiente
		rect(this.x, this.y, scl, scl);

	}
}
