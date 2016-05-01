/**
 * @author    Kujtim Hoxha {@link http://kujtimhoxha.com}
 * @copyright Copyright (c) 2016, Kujtim Hoxha
 * @license   MIT
 */
'use strict';
/**
 * Plugins.
 */
import gulp from 'gulp';
import gutil from 'gulp-util';
import browserSync from 'browser-sync';
import fs from 'fs';
/**
 * Config
 */
let  config = null;
if (fs.existsSync('ng-ts.json')) {
    config = JSON.parse(fs.readFileSync('ng-ts.json', 'utf-8'));
} else {
    gutil.log(gutil.colors.bgRed("Error: ng-ts.json not found in directory"));
    gutil.log("Please view the README.md to setup.");
    process.exit(1);
}
/**
 * Tasks.
 */
import './gulp/tasks/scss.task'
import './gulp/tasks/ts.task'
import './gulp/tasks/tpl.task'
import './gulp/tasks/img.task'
import './gulp/tasks/bower.task'
import './gulp/tasks/fonts.task'
import './gulp/tasks/lib.task'
import './gulp/tasks/index.task'
import karma  from 'karma'
const  Server = karma.Server;
// --------------------------------------------------------------------
// Task: Watch
// --------------------------------------------------------------------

gulp.task('watch', function(done) {
    gutil.log(gutil.colors.green('Loading Gulp Watch'), '');
    browserSync.init({
        server: {
            baseDir: config.dist.paths.base,
            index: "index.html"
        }
    });
    gulp.watch(config.patters.ts, ['ts']);
    gulp.watch(config.patters.sass, ['sass']);
    gulp.watch(config.patters.img, ['img']);
    gulp.watch(config.bowerJson, ['bower-js','bower-css']);
    gulp.watch(config.patters.templates, ['tpl']);
    gulp.watch(config.patters.fonts, ['fonts']);
    gulp.watch(config.patters.lib, ['lib']);
    gulp.watch(config.src.index, ['index']);
    if(process.argv.indexOf("--no-test")=== -1){
        new Server({
            configFile: __dirname +"/"+config.tests.karma,
        },  function() {
            done();
        }).start()
    }
    gulp.watch(config.template_files).on('change', browserSync.reload);
});
/**
 * Task:test
 */
gulp.task('test',["build"],function(done) {
    new Server({
        configFile: __dirname +"/"+config.tests.karma,
        singleRun: true
    },  function() {
        done();
    }).start();
});
gulp.task('build',[
    'bower-js',
    'bower-css',
    'img',
    'lib',
    'fonts',
    'ts',
    'tpl',
    'sass',
    'index',
])
/**
 * Task: default
 */
gulp.task('default', [
  'build'
]);