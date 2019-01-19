module.exports = function() {
    $.gulp.task("sprite", function() {

        return $.gulp.src("src/img/icons/*.svg")
            .pipe($.gulpcheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parserOptions: {xmlMode: true}
            }))
            .pipe($.replace("&gt;", ">"))
            .pipe($.svgSymbols())
    //         .pipe($.svgSprite({
				// preview: false,
    //             // cssFile: "../../../src/styles/partials/_sprite.scss",
				// svg: {
    //                 symbol:"sprite.svg",
				// 	sprite: "../../../dest/img/sprites/sprite.svg"
				// },
    //              symbol: true // Activate the «symbol» mode
    //         }))
            .pipe($.gulp.dest("./dest/img/sprites/"))
            .pipe($.debug({"title": "sprite"}));
    });
};


