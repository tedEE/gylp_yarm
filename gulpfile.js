global.$ = {
    gulp: require("gulp"),
    browsersync: require("browser-sync").create(),
    packageJson: require('./package.json'),
    autoprefixer: require("gulp-autoprefixer"),
    babel: require("gulp-babel"),
    uglify: require("gulp-uglify"),
    concat: require("gulp-concat"),
    sass: require("gulp-sass"),
    gulpcheerio : require('gulp-cheerio'),
    imageminSvgo : require('imagemin-svgo'),
    cheerio : require('cheerio'),
    svgmin : require('gulp-svgmin'),
    stylus : require('gulp-stylus'),
    // nib : require('nib'),
	gcmq : require('gulp-group-css-media-queries'),
    mincss: require("gulp-clean-css"),
    pug : require('gulp-pug'),
    sourcemaps: require("gulp-sourcemaps"),
    rename: require("gulp-rename"),
    imagemin: require("gulp-imagemin"),
    pngquant: require("imagemin-pngquant"),
    imageminJpegRecompress: require("imagemin-jpeg-recompress"),
    favicons: require("gulp-favicons"),
    svgSymbols : require('gulp-svg-symbols'),
    iconfont: require("gulp-iconfont"),
    iconfontcss: require("gulp-iconfont-css"),
	// svgSprite: require("gulp-svg-sprites"),
    // font2css : require('gulp-font2css'),
    replace: require("gulp-replace"),
    rigger: require("gulp-rigger"),
    newer: require("gulp-newer"),
    plumber: require("gulp-plumber"),
    debug: require("gulp-debug"),
    watch: require("gulp-watch"),
    clean: require("gulp-clean"),

    path: {
        tasks: require("./gulp/config.js")
    }
};

$.path.tasks.forEach(function(taskPath) {
    require(taskPath)();
});

// BUILD
$.gulp.task("default", $.gulp.series("clean","fonts", "sprite", "iconfont", "libs",
    $.gulp.parallel("html", "styles", "favicons", "images", "scripts", "server_conf"),
    $.gulp.parallel("watch", "serve")
));