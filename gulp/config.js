'use strict';

export default {

  browserPort: 3000,
  UIPort: 3001,

  sourceDir: './app/',
  buildDir: './build/',

  styles: {
    src: 'app/styles/**/*.css',
    dest: 'build/css',
    prodSourcemap: false,
    sassIncludePaths: []
  },
  
  bootstrap: {
    src: './node_modules/bootstrap/dist/css/*.min.css',
    dest: 'build/vendor/'
  },

  awesome: {
    src: './node_modules/font-awesome/css/*.min.css',
    dest: 'build/vendor/'
  },

  scripts: {
    src: 'app/js/**/*.js',
    dest: 'build/js'
  },

  images: {
    src: 'app/images/**/*',
    dest: 'build/images'
  },

  fonts: {
    src: ['app/fonts/**/*'],
    dest: 'build/fonts'
  },
  awesomeFonts: {
    src: ['./node_modules/font-awesome/fonts/**/*'],
    dest: 'build/fonts'
  },
  bootstrapFonts: {
    src: ['./node_modules/bootstrap/dist/fonts/**/*'],
    dest: 'build/fonts'
  },

  assetExtensions: [
    'js',
    'css',
    'png',
    'jpe?g',
    'gif',
    'svg',
    'eot',
    'otf',
    'ttc',
    'ttf',
    'woff2?'
  ],

  views: {
    index: 'app/index.html',
    src: 'app/views/**/*.html',
    dest: 'app/js'
  },

  gzip: {
    src: 'build/**/*.{html,xml,json,css,js,js.map,css.map}',
    dest: 'build/',
    options: {}
  },

  browserify: {
    bundleName: 'main.js',
    prodSourcemap: false
  },

  test: {
    karma: 'test/karma.conf.js',
    protractor: 'test/protractor.conf.js'
  },

  init: function() {
    this.views.watch = [
      this.views.index,
      this.views.src
    ];

    return this;
  }

}.init();
