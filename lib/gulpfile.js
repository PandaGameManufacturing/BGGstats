// Include gulp
const gulp = require('gulp');

 // Include plugins
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-ruby-sass');
const jshint = require('gulp-jshint');

 // Concatenate Main JS
gulp.task('concat-main-js', function() {
    return gulp.src('../js/modules/*.js')
      .pipe(concat('main.js'))
        .pipe(gulp.dest('../js'));
});

 // Concatenate Charts JS
gulp.task('concat-charts-js', function() {
    return gulp.src('../js/charts/*.js')
      .pipe(concat('charts.js'))
        .pipe(gulp.dest('../js'));
});

 // Concatenate & Minify Main JS
gulp.task('minify-main-js', function() {
    return gulp.src('../js/modules/*.js')
      .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('../js'));
});

 // Concatenate & Charts Main JS
gulp.task('minify-charts-js', function() {
    return gulp.src('../js/charts/*.js')
      .pipe(concat('charts.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('../js'));
});

 // Compile sass
gulp.task('sass', function() {
    return sass('../scss/main.scss')
        .pipe(gulp.dest('../css'));
});

 // Compile & Minify sass
gulp.task('sass-minify', function() {
    return sass('../scss/main.scss', {style: 'compressed'})
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('../css'));
});

gulp.task('lint', function() {
  return gulp.src('../js/modules/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// Watch List
gulp.task('watch', function() {
   // Watch .js files
  // gulp.watch('../js/*.js', ['minify-js']);
  gulp.watch('../js/modules/*.js', ['concat-js', 'minify-js', 'lint']);
   // Watch .scss files
  // gulp.watch('../scss/*.scss', ['sass-minify']);
  gulp.watch('../scss/*.scss', ['sass', 'sass-minify']);
   // Watch image files
  // gulp.watch('src/images/**/*', ['images']);
});

// Default Task
gulp.task('default', ['minify-main-js', 'minify-charts-js', 'concat-main-js', 'concat-charts-js', 'sass-minify', 'sass', 'watch']);
