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
        },
        
        // Config for creating a clean dist folder
        copy: {
            dist: {
                cwd: 'app',
                src: ['**', '!styles/**/*.css', '!scripts/**/*.js'],
                dest: 'dist',
                expand: true
            },
            fonts: {
                files: [
                    {
                        // for bootstrap fonts
                        expand: true,
                        dot: true, 
                        cwd: 'bower_components/bootstrap/dist',
                        src: ['fonts/*.*'],
                        dest: 'dist'
                    },
                    {
                        // for font-awesome
                        expand: true,
                        dot: true, 
                        cwd: 'bower_components/font-awesome',
                        src: ['fonts/*.*'],
                        dest: 'dist'
                    }
                ]
            }
        },
        
        clean: {
            build: {
                src: ['dist/']
            }
        }
    });
    
    grunt.registerTask('build', ['clean', 'jshint', 'copy']);
    grunt.registerTask('default', ['build']);
};
