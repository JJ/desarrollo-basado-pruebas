'use strict';

module.exports = function(grunt) {
    
    // Configuración del proyecto
    grunt.initConfig({
	// incluye la configuración
	pkg: grunt.file.readJSON('package.json'),
	docco: {	   
	    src: ['*.js'],
	    options: {
		output: 'docs/'
	    }

	}
    });

    // Carga el plugin de grunt para hacer esto
    grunt.loadNpmTasks('grunt-docco');

    // Tarea por omisión: generar la documentación
    grunt.registerTask('default', ['docco']);
};
