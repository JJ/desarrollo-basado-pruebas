#!/usr/bin/env nodejs

var apuesta = require("../Apuesta.js");
console.log(apuesta);
var nueva_apuesta = new apuesta.Apuesta('Polopos','Alhama','2-3');
console.log(nueva_apuesta);
console.log(nueva_apuesta.as_string());
