var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var plumber = require('gulp-plumber');

gulp.task('default', ['sass', 'jade']);

gulp.task('watch', function() {
	gulp.watch('lib/sass/*.sass', ['sass']);
	gulp.watch('lib/index.jade', ['jade']);
});

gulp.task('jade', function() {
	return gulp.src('lib/index.jade')
		.pipe(plumber())
		.pipe(jade({
			pretty:true
		}))
		.pipe(gulp.dest('.'));
})

gulp.task('sass', function() {
	return gulp.src('lib/sass/style.sass')
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest('css'));
});
