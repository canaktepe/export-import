module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: ['assets/**/*.js'],
        dest: 'build/js/build.js',
      },
    },
    babel: {
      options: {
        sourceMap: true,
      },
      dist: {
        files: {
          'build/js/build.js': 'build/js/build.js'
        }
      }
    },
    browserify: {
      dev: {
        files: {
          'build/js/build.js': ['build/js/build.js']
        },
        options: {
          transform:[
            ['babelify',{"presets":["@babel/preset-env"]}]
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-browserify');


  grunt.registerTask('default', ['concat', 'babel','browserify']);
}