// Definición de la clase Apuesta: `quien` = código de la persona que hace la apuesta `local, visitante` = goles del local y del visitante
exports.Apuesta = function (quien,local,visitante) {
    this.local = local;
    this.visitante= visitante;
    this.quien= quien;
    this.as_string = as_string;
}

// Devuelve la apuesta como una cadena 
function as_string() {
    return this.quien + ": " + this.local + " - " + this.visitante;
}


