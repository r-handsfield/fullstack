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
    require('jit-grunt')(grunt, {useminPrepare: 'grunt-usemin'});
    
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
        },
        
        // Tasks for preparing/readying/optimizing the dist folder
        useminPrepare: {
            html: 'app/menu.html',
            options: {
                dest: 'dist'
            }
        },
        
        concat: {
            options: {
                separator: ';'
            },
            // dist configuration provided by useminPrepare
            dist: {}
        },
        
        uglify: {
            // dist configuration provided by useminPrepare
            dist: {}
        },
        
        cssmin: {
//            dist: {}
        },
        
        filerev: {
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                length: 20
            },
            release: {
                // filerev:release md5 hashes all assets (img, js, css) in dist dir
                files: [{
                    src:['dist/scripts/*.js', 'dist/styles/*.css']
                }]
            }
        },
        
        // Usemin
        // Replaces all assets with their revved version in html and css files.
        // options.assetDirs contains the directories for finding the assets
        // according to their relative paths
        usemin: {
            html: ['dist/*.html'],
            css: ['dist/styles/*.css'],
            options: {
                assetsdirs: ['dist', 'dist/styles']
            }
        },
        
        // Tasks to start web server, watch files, & reload browser if files are updated
        watch: {
            copy: {
                files: [ 'app/**', '!app/**/*.css', '!app/**/*.js'],
                tasks: [ 'build' ]
            },
            scripts: {
                files: ['app/scripts/app.js'],
                tasks:[ 'build']
            },
            styles: {
                files: ['app/styles/mystyles.css'],
                tasks:['build']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    'app/{,*/}*.html',
                    '.tmp/styles/{,*/}*.css',
                    'app/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        
        connect: {
            options: {
                port: 9000,
                hostname: 'localhost', // change to '0.0.0.0' to access this server from outside
                livereload: 35729
            },
            dist: {
                options: {
                    open: true,
                    base: {
                        path: 'dist',
                        options: {
                            index: 'menu.html',
                            maxAge: 300000
                        }
                    }
                }
            }
        }
    });
    
    grunt.registerTask('build', 
                        [
                            'clean', 
                            'jshint', 
                            'useminPrepare',
                            'concat',
                            'cssmin',
                            'uglify',
                            'copy',
                            'filerev',
                            'usemin'
                        ]
                      );

    grunt.registerTask('serve', ['build', 'connect:dist', 'watch']);
    grunt.registerTask('default', ['build']);
};
