module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      files: ['development/html/*.html',
        'development/sass/*.sass',
        'development/scss/*.scss',
        'development/css/*.css',
        'development/js/*.js',
        'development/css/*min.css',
        'development/js/*.min.js'
      ],
      tasks: ['jshint', 'sass', 'htmlmin', 'cssmin', 'uglify']
    },
    jshint: {
      all: ['gruntfile.js',
        'development/js/*.js'
      ]
    },
    sass: {
      dev: {
        files: {
          'development/css/main.css': 'development/sass/main.sass'
        },
        options: {
          sourcemap: true
        }
      }
    },
    htmlmin: { // Task
      dist: { // Target
        options: { // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: { // Dictionary of files
          'distribution/index.html': 'development/html/index.html' // 'destination': 'source'
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'development/css',
          src: ['*.css', '!*.min.css'],
          dest: 'distribution/css',
          ext: '.min.css'
        }]
      }
    },
    uglify: {
      my_target: {
        files: {
          'distribution/js/script.min.js': ['development/js/*.js']
        }
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'development/images/',
          src: ['**/*.{png,jpg,jpeg,gif}'],
          dest: 'distribution/images/'
        }]
      }
    },
    browserSync: {
      bsFiles: {
        src: [
          'distribution/css/*.css',
          'distribution/*.html'
        ]
      },
      options: {
        watchTask: true,
        server: './distribution'
      }
    }
  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-browser-sync');
  // Default task(s).
  grunt.registerTask('default', ['browserSync', 'watch']);
  grunt.registerTask('distribution', ['jshint', 'sass', 'htmlmin', 'cssmin', 'uglify']);
};
