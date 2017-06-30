var gulp = require("gulp");
var watch = require('gulp-watch');
var browserSync = require("browser-sync");
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');

// ディレクトリ設定
var dir = {
    dist: 'htdocs'
}

gulp.task('sass', function() {
  gulp.src('./scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest(dir.dist + '/css/'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: dir.dist
        }
    });
});

gulp.task('reload', function(){
  browserSync.reload();
});

// ファイル更新監視
gulp.task('watch', function() {
    gulp.watch([
        dir.dist + '/{,**/}*.html', // 対象ファイル
        dir.dist + '/{,**/}*.css', 
        dir.src + '/{,**/}*.js'
    ],['reload']); // 実行タスク（scss ファイル以外が更新されたタイミングでブラウザを自動更新）
    gulp.watch("./scss/**/*.scss",['sass','reload']);
});

// 以下タスクの登録
// デフォルト（各ファイル監視してビルド）
gulp.task('default', [
    'browser-sync',
    'sass',
    'watch'
], function() {
  gulp.watch(dir.src,["reload"]);
});
