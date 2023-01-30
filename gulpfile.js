const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function defaultTask(cb) {
	src('sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(dest('./build/css'));
	cb();
}

exports.default = defaultTask