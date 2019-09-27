var assert = require("chai").assert,
    apuesta = require(__dirname+"/../Apuesta.js");

describe('Apuesta con Chai', function(){
    // Testea que se haya cargado bien la librería
    describe('Carga', function(){
	it('should be loaded', function(){
	    assert.ok(apuesta, "Cargado");
	});
	
    });
    describe('Crea', function(){
	it('should create apuestas correctly', function(){
	    var nueva_apuesta = new apuesta.Apuesta('Polopos','Alhama','2-3');
	    assert.equal(nueva_apuesta.as_string(), "Polopos: Alhama - 2-3","Creado");
	});
    });
});
