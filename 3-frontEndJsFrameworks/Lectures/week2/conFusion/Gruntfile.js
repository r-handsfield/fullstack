/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
module.exports = function (grunt) {
    
    // Time tasks
    require('time-grunt')(grunt);
    
    // Automatically load required grunt tasks
    require('jit-grunt')(grunt);
    
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: ['Gruntfile.js', 'app/scripts/{,*/}*.js']
            }
        }
    });
    
    grunt.registerTask('build', ['jshint']);
    grunt.registerTask('default', ['build']);
};
