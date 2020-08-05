const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => 
  gulp.src('./dev/scss/styles.scss')
  .pipe(sass({
    outputStyle: 'expanded'
  }))
  .pipe(gulp.dest('./public/css/'))
);

gulp.task('default', () => 
  gulp.watch('./dev/**/*.scss', gulp.series('sass'))
);