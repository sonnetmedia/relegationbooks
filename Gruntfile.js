'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dev: {
        options: {
          outputStyle: 'expanded',
          includePaths: require('node-neat').includePaths  
        },
        files: [{
          // Files in the /sass/ directory will go to /static/css/ when processed.
          expand: true,
          cwd: 'sass',
          src: ['*.scss'],
          dest: 'static/css',
          ext: '.css'
        }]
      },
      production: {
        options: {
          outputStyle: 'compressed',
          includePaths: require('node-neat').includePaths  
        },
        files: [{
          // Files in the /sass/ directory will go to /static/css/ when processed.
          expand: true,
          cwd: 'sass',
          src: ['*.scss'],
          dest: 'static/css',
          ext: '.min.css'
        }]
      }
    },
 concat: {
    dist: {
      src: ['node_modules/jquery/dist/jquery.min.js','static/javascript/site.js'],
      dest: 'static/javascript/dist/scripts-concatenated.js',
    },
    modernize: {
      src: ['node_modules/html5shiv/dist/html5shiv.min.js','/node_modules/respond.js/dest/respond.min.js'],
      dest: 'static/javascript/modernize/modernize.min.js',
    }
  },

  uglify: {
    options: {
      mangle: {
        except: ['jQuery']
      }
    },
    my_target: {
      files: {
        'static/javascript/dist/scripts-concatenated.min.js': ['static/javascript/dist/scripts-concatenated.js']
      }
    }
  },
    // WHEN FILES CHANGE, RUN THE ABOVE TASKS ALONG WITH BUILD
    watch: {
      concat : {
        files:  'static/javascript/**/*.js',
        tasks: ['concat', 'uglify', 'build'],
         nonull: true,
      },
      sass : {
        files: ['sass/*.scss','sass/**/*.scss'],
        tasks: ['sass', 'build-static'],
         nonull: true,
      }
    }

  });

  // THIS LOADS THE TASKS WE NEED ABOVE IN FROM OUR NPM
  // Note, that we need to have these installed through the package.json file as well

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // NEVER REMOVE THESE LINES, OR ELSE YOUR PROJECT MAY NOT WORK
  require('./options/generatorOptions.js')(grunt);
  grunt.loadTasks('tasks');
};
