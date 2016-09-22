import gulp from 'gulp'
import babel from 'gulp-babel'
import cache from 'gulp-cached'
import chmod from 'gulp-chmod'

gulp.task('transpile', () =>
  gulp.src('src/index.js')
    .pipe(cache('transpile'))
    .pipe(babel())
		.pipe(chmod(755))
    .pipe(gulp.dest('dist')))

gulp.task('watch', () => gulp.watch('src/*.js', ['transpile']))

gulp.task('default', ['watch', 'transpile'])
