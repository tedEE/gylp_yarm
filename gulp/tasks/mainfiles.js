module.exports = function() {
	$.gulp.task('main-bower-files', function() {
	    return $.gulp.src('./bower.json')
	        .pipe($.mainBowerFiles())
	        .pipe($.gulp.dest('./src/minlibs'));
	});

	// $.gulp.task('min:libs', function() {
    // return file.extname == '.js' ? './dest/libs/js' :
    //     file.extname == '.css' ? './dest/libs/css' : './dest/libs/other';
	//         // .pipe($.mainBowerFiles())
	//         // .pipe($.gulp.dest('./dest/libs'));
	// });

    // .pipe($.gulp.dest(function (file) {
    // return file.extname == '.js' ? './dest/libs' :
    //     file.extname == '.css' ? './dest/libs/css' : './dest/libs/other';

	// $.gulp.task('scripts:lib', function () {
	// return $.gulp.src("./src/js/libs/**/*.js")
	// 			.pipe($.concat('libs.min.js'))
	// 			.pipe($.uglify()) 
	// 			.pipe($.gulp.dest('./dest/js/'))
	// 			// .pipe($.bs.reload({
	// 			// 	stream:true
	// 			// }));
	// });

	// $.gulp.task('mainlib', $.gulp.series(
	// $.gulp.parallel('main-bower-files'),
	// // $.gulp.parallel('scripts:lib')
	// ));
};
