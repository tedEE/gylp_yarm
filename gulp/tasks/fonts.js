module.exports = function() {
    $.gulp.task("fonts", function() {
        return $.gulp.src("./src/fonts/**")
            .pipe($.concat('fonts.css'))
            .pipe($.gulp.dest("./dest/fonts/"));
    });
};