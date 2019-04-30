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
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-babel');


  grunt.registerTask('default', ['concat', 'babel']);
}