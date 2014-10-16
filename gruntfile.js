module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/**/*.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today(\'dd-mm-yyyy\') %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        handlebars: {
            compile: {
                options: {
                    amd: true,
                },
                src: ['src/templates/**/*.html'],
                dest: 'dist/precompiled.handlebars.js'
            }
        },
        requirejs: {
            compile: {
                options: {
                    appDir: 'src',
                    baseUrl: 'js',
                    dir: 'dist/',
                    findNestedDependencies: true,
                    inlineText: false,
                    mainConfigFile: 'src/js/main.js',
                    modules: [
                        {
                            name: 'main',
                            exclude: [
                                'maps/aepohio.js',
                                'maps/aeptexas.js',
                                'maps/apco.js',
                                'maps/im.js',
                                'maps/kentucky.js',
                                'maps/pso.js',
                                'maps/swepco.js'
                            ]
                        }
                    ],
                    removeCombined: true,
                    optimize: "uglify2",
                    preserveLicenseComments: false
                }                
            }
        },
        sass: {
            dist: {
                options: {
                    sourcemap: 'none'
                },
                files: {
                    'dist/css/normalize.css': 'src/css/normalize.scss',
                    'dist/css/foundation.css': 'src/css/foundation.scss',
                    'dist/css/index.css': 'src/css/index.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['concat', 'uglify']);

};