/**
 * @author    Kujtim Hoxha {@link http://kujtimhoxha.com}
 * @copyright Copyright (c) 2016, Kujtim Hoxha
 * @license   MIT
 */
/**
 * Plugins
 */
import gulp from 'gulp';
import gutil from 'gulp-util';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';

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

gulp.task('img', function() {

    return gulp.src(config.patters.img)
        .pipe(imagemin(config.patters.img,config.dist.paths.base+config.dist.paths.img,{
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(config.dist.paths.base+config.dist.paths.img));

});