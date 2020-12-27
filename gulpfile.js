const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const uglifycss = require("gulp-uglifycss");
const webpack = require("webpack");
const chalk = require("chalk");

function css() {
	return gulp
		.src("src/sass/*.sass")
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(uglifycss())
		.pipe(gulp.dest("public/css"))
		.pipe(browserSync.stream());
}

function watch() {
	browserSync.init({
		server: {
			baseDir: "./public/"
		}
	});
	gulp.watch("src/sass/*.sass", css);
	gulp.watch("./public/*.html").on("change", browserSync.reload);
	gulp.watch("src/js/*.ts").on("change", js);
}


function js() {
	webpack(require("./webpack.config.js"), function(err, stats) {
		if (err) {
			console.log(err.toString());
		}

		console.log(chalk.green(stats.toString()));
	});
	browserSync.reload();
}

exports.css = css;
exports.js = js;

exports.watch = watch;