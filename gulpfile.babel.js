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

// --------------------------------------------------------------------
// Task: Watch
// --------------------------------------------------------------------

gulp.task('watch', function() {
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
    // gulp.watch(config.patters.fonts, ['fonts']);
    gulp.watch(config.patters.templates, ['tpl']);
    // gulp.watch(config.template_files).on('change', browserSync.reload);
});

/**
 * Task: default
 */
gulp.task('default', [
    'ts',
    'tpl',
    'sass',
    'img'
]);