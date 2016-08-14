'use strict'

var gulp = require('gulp');
var autoprefixer = require( 'autoprefixer-stylus' );
var browserSync = require( 'browser-sync' );
var clean = require( 'gulp-clean' );
var concat = require( 'gulp-concat' );
var htmlMin = require( 'gulp-htmlmin' );
var imagemin = require( 'gulp-imagemin' );
var koutoSwiss = require( 'kouto-swiss' );
var jade = require( 'gulp-jade' );
var jeet = require( 'jeet' );
var map = require( 'map-stream' );
var plumber = require('gulp-plumber');
var rename = require( 'gulp-rename' );
var rupture = require( 'rupture' );
var sourceMaps = require( 'gulp-sourcemaps' );
var stylus = require ( 'gulp-stylus' );
var uglify = require( 'gulp-uglify' );

var jadeForest = {
    appJs: 'app/**/*.js',
    css: 'assets/stylesheet/**/*.styl',
    cssStylus: 'assets/stylesheet/styles.styl',
    html: 'dev/**/*.html',
    img: 'assets/images/**/*',
    jade: 'assets/**/*.jade',
    js: 'assets/javascript/**/*.js'
};

var kunlaiSummit = {
    css: 'dev/css/',
    dev: 'dev/',
    img: 'dev/images/',
    js: 'dev/js/'
};

var eternalBlossoms = {
    css: 'dist/css/',
    img: 'dist/img/',
    js: 'dist/js/',
    dist: 'dist/'
};

// Clear folder dist

gulp.task( 'clean', function() {
    return gulp.src( jadeForest.html )
        .pipe( clean() );
} );

// compiler css with Stylus

gulp.task( 'css', function() {
    gulp.src( jadeForest.cssStylus )
        .pipe( plumber() )
        .pipe( sourceMaps.init() )
        .pipe( stylus( {
            use: [koutoSwiss(), autoprefixer('> 0%'), jeet(), rupture()],
            compress: true
        } ) )
        .pipe( sourceMaps.write( './' ) )
        .pipe( plumber.stop() )
        .pipe( gulp.dest( kunlaiSummit.css ) )
        .pipe( browserSync.reload( {
            stream: true
        } ) );
} );

// compiler jade

gulp.task( 'jade', function() {
    gulp.src( jadeForest.jade )
        .pipe( plumber() )
        .pipe( jade( {
            pretty: false
        } ) )
        .pipe( plumber.stop() )
        .pipe( gulp.dest( kunlaiSummit.dev ) );
} );

// Javascript

gulp.task( 'javascript', function() {
    gulp.src( jadeForest.js )
      .pipe( plumber() )
      .pipe( sourceMaps.init() )
      .pipe( concat( 'main.js' ))
      .pipe( gulp.dest( kunlaiSummit.js) )
      .pipe( uglify() )
      .pipe( sourceMaps.write( './' ) )
      .pipe( plumber.stop() )
      .pipe( gulp.dest( kunlaiSummit.js) );
});

// Image Min

gulp.task( 'image', function() {
  gulp.src( jadeForest.img )
    .pipe( imagemin() )
    .pipe( gulp.dest( kunlaiSummit.img ) )
    .pipe( browserSync.reload( {
        stream: true
    } ) );
} );

// browserSync

gulp.task( 'browserSync', function() {
    browserSync( {
        server: {
            baseDir: kunlaiSummit.dev
        }
    } )
} );

// Watch files... PULL THE BOSS!!

gulp.task( 'pullTheBoss', ['css', 'javascript', 'jade', 'image', 'browserSync'], function() {
    gulp.watch( jadeForest.css, ['css'] );
    gulp.watch( jadeForest.jade, ['jade'] );
    gulp.watch( jadeForest.js, ['javascript'] );
    gulp.watch( jadeForest.img, ['image'] );
    gulp.watch( jadeForest.html, browserSync.reload );
} );
