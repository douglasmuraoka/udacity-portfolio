module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      cover: {
        options: {
          engine: 'im',
          concurrency: 4,
          sizes: [{
            name: "full",
            width: 960,
            quality: 30
          },
          {
            name: "medium",
            width: 768,
            quality: 30
          },
          {
            name: "medium",
            width: 1536,
            suffix: "_2x",
            quality: 30
          },
          {
            name: "small",
            width: 360,
            quality: 30
          },
          {
            name: "small",
            width: 720,
            suffix: "_2x",
            quality: 30
          },
          {
            name: "small",
            width: 1080,
            suffix: '_3x',
            quality: 30
          }]
        },

        files: [{
          expand: true,
          src: ['portfolio-main.jpg'],
          cwd: 'img_src/',
          dest: 'img/'
        }]
      },

      /* Generates image files for featured work section */
      work: {
        options: {
          engine: 'im',
          concurrency: 4,
          sizes: [{
            name: "full",
            width: 320,
            height: 205,
            aspectRatio: false,
            quality: 30
          },
          {
            name: "full",
            width: 640,
            height: 460,
            aspectRatio: false,
            suffix: "_2x",
            quality: 30
          },
          {
            name: "small",
            width: 360,
            height: 230,
            aspectRatio: false,
            quality: 30
          },
          {
            name: "small",
            width: 720,
            height: 460,
            aspectRatio: false,
            suffix: "_2x",
            quality: 30
          },
          {
            name: "small",
            width: 1080,
            height: 690,
            aspectRatio: false,
            suffix: '_3x',
            quality: 30
          }]
        },

        files: [{
          expand: true,
          src: ['*.jpg', '!portfolio-main.jpg'], // all jpgs, except portfolio-main.jpg
          cwd: 'img_src/',
          dest: 'img/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['img'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['img']
        },
      },
    },

    /* Copy SVGs that don't need processing to img directory */
    copy: {
      dev: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ['img_src/*.svg'],
            dest: 'img/'
          },
        ],
      },
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');

  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images', 'copy']);
};
