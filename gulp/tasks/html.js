module.exports = function() {
	$.gulp.task("html", function () {
	return $.gulp.src("./src/views/**/index.pug")
				.pipe($.plumber())
				.pipe($.pug({
					pretty:true //иначе html будет выводиться в одну строку
				}))
				.pipe($.gulp.dest("./dest"))
				.pipe($.debug({"title": "html"}))
				.on('end', $.browsersync.reload);
});
}



// module.exports = function() {
//     $.gulp.task("html", function() {
//         return $.gulp.src(["./src/views/**/index.html", "!./src/views/blocks/*.html"])
//             .pipe($.rigger())
//             .pipe($.replace("../dest/", "../"))
//             .pipe($.gulp.dest("./dest/"))
//             .pipe($.debug({"title": "html"}))
//             .on("end", $.browsersync.reload);
//     });
// };