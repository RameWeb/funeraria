'use strict';

<<<<<<< HEAD
const gulp = require('gulp'),
      connect = require('gulp-connect'),
      nodemon = require('gulp-nodemon'),
      todo = require('gulp-todo'),
      browserSync = require('browser-sync'),
      paths = {
        views : './public/components/**/**/*.html',
        styles : './public/components/**/**/*.css',
        js: './public/components/**/**/*.js'
      };
=======
// Se inyectan las dependenciasdentro del archivo
const gulp = require('gulp');
const connect = require('gulp-connect');
const nodemon = require('gulp-nodemon');
const todo = require('gulp-todo');
const browserSync = require('browser-sync').create();
const paths = {
  views : './public/components/**/**/*.html',
  styles : './public/components/**/**/*.css',
  js : './public/components/**/**/*.js'
}
>>>>>>> Dev

gulp.task('connect', () => {
  connect.server({
    root: 'public',
    port: 8000,
    livereload: true
  });
  browserSync.init({
    server: './public'
  })
});

gulp.task('to-do', () => {
  gulp.src(paths.js)
  .pipe(todo())
  .pipe(gulp.dest('./'));
});

gulp.task('dependencies', () => {
  gulp.src([
    './node_modules/angular/angular.min.js'
  ])
    .pipe(gulp.dest('./public/lib/angular'));

  gulp.src([
    './node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
    './node_modules/oclazyload/dist/ocLazyLoad.min.js',
    './node_modules/ui-router-page-title/page-title.min.js'
  ])
    .pipe(gulp.dest('./public/lib/angular/routing'));

  gulp.src([
    './node_modules/bootstrap/dist/js/bootstrap.min.js',
    './node_modules/bootstrap/dist/css/bootstrap.min.css',
    './node_modules/jquery/dist/jquery.min.js',
<<<<<<< HEAD
    './node_modules/popper.js/dist/popper.min.js'
=======
    './node_modules/popper.js/dist/umd/popper.min.js',
    './node_modules/sweetalert/dist/sweetalert.min.js',
    './node_modules/angular/angular.min.js',
    './node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
    './node_modules/angular-css/angular-css.min.js',
    './node_modules/oclazyload/dist/ocLazyLoad.min.js',
    './node_modules/checklist-model/checklist-model.js'
>>>>>>> Dev
  ])
    .pipe(gulp.dest('./public/lib/bootstrap'));

  gulp.src([
    './node_modules/sweetalert/dist/sweetalert.min.js',
  ])
    .pipe(gulp.dest('./public/lib/sweetalert'));

});

gulp.task('reload', () => {
  gulp.src([paths.views, paths.styles, paths.js])
    .pipe(connect.reload())
    .pipe(browserSync.stream());
});

gulp.task('watch', () => {
  gulp.watch([paths.views, paths.styles,paths.js], ['reload', 'to-do'])
    .on('change', browserSync.reload);
});
<<<<<<< HEAD

gulp.task('default', ['connect', 'to-do', 'dependencies', 'reload', 'watch']);
=======
// Tarea global que llama todas las tareas
gulp.task('default', ['connect', 'to-do', 'dependencies','reload','watch']);
>>>>>>> Dev
