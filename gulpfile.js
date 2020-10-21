var gulp = require('gulp');
var sass = require('gulp-sass');


var concat = require('gulp-concat');
var browserSync = require('browser-sync').create()

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
      .pipe(sass())
      .pipe(concat('style.css'))
      .pipe(gulp.dest('./app/css/'))
      .pipe(browserSync.reload({
        stream: true
      }))
});



gulp.task('scripts', function() {
    return gulp.src('./app/js*.js')
      .pipe(concat('main.js'))
      .pipe(gulp.dest('./js/'));
});

gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'app'
      },
    })
})

gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', gulp.series(['sass','scripts','browserSync']));
    gulp.watch('app/*.html', browserSync.reload); 
    gulp.watch('app/js/**/*.js', browserSync.reload);
});
