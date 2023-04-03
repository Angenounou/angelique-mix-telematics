
  const gulp = require('gulp');
  const cssnano = require('gulp-cssnano');
  const rename = require('gulp-rename');
  const minifycss = require('gulp-clean-css');
  const minifyjs = require('gulp-uglify');
  const babel = require('gulp-babel');



gulp.task('minify-css', function() {
  return gulp
    .src('css/*.css')
    .pipe(cssnano())
    .pipe(minifycss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css/min'));
    
});

gulp.task('minify-js', function() {
  
  return gulp
    .src('js/*.js')
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(minifyjs())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('js/min'));
  
});

gulp.task('watch', function () {
  gulp.watch('css/*.css', gulp.series('minify-css'));
  gulp.watch('js/*.js', gulp.series('minify-js'));
});

//gulp.task('default', gulp.series('minify-css', 'watch'));
