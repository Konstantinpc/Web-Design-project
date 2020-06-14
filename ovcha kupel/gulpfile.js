var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss')

gulp.task('default', function () {
    return gulp.src("scss/*.scss")
            .pipe(sass())
            .pipe(postcss([ autoprefixer() ]))
            .on("error", sass.logError)
            .pipe(gulp.dest("dist/css"))
	
} );
