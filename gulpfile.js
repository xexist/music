var gulp = require("gulp"),
    watch = require('gulp-watch'),
    browserSync = require("browser-sync"),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    connect = require('gulp-connect-php'),
    sftp = require('gulp-sftp');

// ディレクトリ設定
var dir = {
  dist: 'htdocs'
}

var loadJsonSync = function(filename) {
  return JSON.parse(fs.readFileSync(filename, 'utf8'));
};

gulp.task('sass', function() {
  gulp.src('./scss/**/*.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(gulp.dest(dir.dist + '/css/'));
});

gulp.task('connect', function() {
  connect.server({
  port:8001,
  base:dir.dist
  }, function (){
  browserSync({
    proxy: 'localhost:8001'
  });
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
  'connect',
  'sass',
  'watch'
], function() {
  gulp.watch(dir.src,["reload"]);
});
