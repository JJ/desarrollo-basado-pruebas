// Definición de la clase Apuesta
exports.Apuesta = function (quien,local,visitante) {
    this.local = local;
    this.visitante=visitante;
    this.quien=quien;
    this.as_string = as_string;
}

function as_string() {
    return this.quien + ": " + this.local + " - " + this.visitante;
}


