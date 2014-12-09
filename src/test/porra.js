var assert = require("assert"),
    apuesta = require(__dirname+"/../Apuesta.js");

describe('Apuesta', function(){
  describe('Carga', function(){
    it('should be loaded', function(){
	assert(apuesta, "Cargado");
    });
  });
});
