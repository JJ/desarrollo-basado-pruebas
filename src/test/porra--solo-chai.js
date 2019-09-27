var assert = require("chai").should(),
    apuesta = require(__dirname+"/../Apuesta.js");

describe('BDD con Chai', function(){
    it('Debería cargar la biblioteca y poder instanciarse', function() {
	apuesta.should.exist;
	var nueva_apuesta = new apuesta.Apuesta('Polopos','Alhama','2-3');
	
	nueva_apuesta.as_string().should.equal( "Polopos: Alhama - 2-3","Creado");
    })
});
