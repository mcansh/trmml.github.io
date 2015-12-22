var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');

gulp.task('default', ['sass', 'jade']);

gulp.task('watch', function() {
	gulp.watch('sass/style.sass', ['sass']);
	gulp.watch('index.jade', ['jade']);
});

gulp.task('jade', function() {
	return gulp.src('index.jade')
		.pipe(jade({
			pretty:true
		}))
		.pipe(gulp.dest('.'));
})

gulp.task('sass', function() {
	return gulp.src('sass/style.sass').
		pipe(sass())
		.pipe(gulp.dest('css'));
});
