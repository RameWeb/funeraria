 // Se inyecta el modo estricto de EcmaScript, que elimina los errores comunes de JS
'use strict';

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

// Se crea una tarea que conecta el servidor, con la ruta que va a conectar
gulp.task('connect', () => {
  connect.server({
    root:'public',
    port: 8000,
    livereload: true
  });
  browserSync.init({
    server : './public'
  })
});

gulp.task('to-do', () =>{
  gulp.src(paths.js)
  .pipe(todo())
  .pipe(gulp.dest('./'));
});

// Se crea una tarea que trae todas las dependencias desde los node_modules hasta la carpeta lib dentro de public
gulp.task('dependencies', () => {

  // Trae bootstarp desde las dependencias y lo copia dentro de public para poder ser utilizado por el front-end
  gulp.src([
    './node_modules/bootstrap/dist/js/bootstrap.min.js',
    './node_modules/bootstrap/dist/css/bootstrap.min.css'
  ])
  .pipe(gulp.dest('./public/lib/bootstrap'));

  // Trae angular, jquery y popper desde las dependencias y lo copia dentro de public para poder ser utilizado por el front-end
  gulp.src([
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/popper.js/dist/popper.min.js',
    './node_modules/sweetalert/dist/sweetalert.min.js',
    './node_modules/angular/angular.min.js',
    './node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
    './node_modules/angular-css/angular-css.min.js',
    './node_modules/oclazyload/dist/ocLazyLoad.min.js'
  ])
  .pipe(gulp.dest('./public/lib/'));
});

gulp.task('reload', () =>{
  gulp.src([paths.views, paths.styles, paths.js])
  .pipe(connect.reload())
  .pipe(browserSync.stream());
});

gulp.task('watch', () => {
  gulp.watch([paths.views, paths.styles,paths.js], ['reload', 'to-do'])
    .on('change', browserSync.reload);
});
// Tarea global que llama todas las tareas
gulp.task('default', ['connect', 'to-do', 'dependencies','reload','watch']);