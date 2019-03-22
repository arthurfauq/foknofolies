const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const cssnano = require('gulp-cssnano');
const del = require('del');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const useref = require('gulp-useref');

const config = {
  sourcemaps: './maps',
  browserSync: {
    baseDir: ['./', 'dist']
  },
  assets: {
    src: ['src/assets/**/*', 'src/*.{ico,txt}'],
    dest: 'dist'
  },
  fonts: {
    src: 'src/fonts/**/*',
    dest: 'dist/fonts'
  },
  images: {
    src: 'src/img/**/*',
    dest: 'dist/img'
  },
  html: {
    src: 'src/index.html',
    dest: 'dist'
  },
  sass: {
    src: 'src/styles/**/*.scss',
    dest: 'dist/css'
  },
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'dist/js'
  }
};

/**
 * Clean dist directory
 */
const clean = () => del('dist');

/**
 * Copy html files
 */
const copyHtml = () => gulp.src(config.html.src).pipe(gulp.dest(config.html.dest));

/**
 * Copy fonts
 */
const copyFonts = () => gulp.src(config.fonts.src).pipe(gulp.dest(config.fonts.dest));

/**
 * Copy images
 */
const copyImages = () => gulp.src(config.images.src).pipe(gulp.dest(config.images.dest));

/**
 * Copy assets
 */
const copyAssets = () => gulp.src(config.assets.src, { base: 'src/' }).pipe(gulp.dest(config.assets.dest));

/**
 * Copy static files
 */
const copy = gulp.parallel(copyHtml, copyFonts, copyImages, copyAssets);

/**
 * Transpile JavaScript files
 */
const compileScripts = () =>
  gulp
    .src(config.scripts.src)
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(gulp.dest(config.scripts.dest));

/**
 * Compile SASS files
 */
const compileSass = () =>
  gulp
    .src(config.sass.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write(config.sourcemaps))
    .pipe(gulp.dest(config.sass.dest))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );

/**
 * Main compile task
 */
const compile = gulp.parallel(compileSass, compileScripts);

/**
 * Parse styles and scripts from index.html
 */
const parseHtml = () =>
  gulp
    .src('dist/index.html')
    .pipe(useref())
    .pipe(gulpif('*.css', cssnano()))
    .pipe(gulpif('*.css', autoprefixer()))
    .pipe(gulpif('*.js', uglify()))
    .on('error', gutil.log)
    .pipe(gulp.dest(config.html.dest));

/**
 * Watch for changes
 */
const watch = () => {
  gulp.watch(config.html.src, copyHtml).on('change', browserSync.reload);
  gulp.watch(config.sass.src, compileSass).on('change', browserSync.reload);
  gulp.watch(config.scripts.src, compileScripts).on('change', browserSync.reload);
  gulp.watch(config.fonts.src, copyFonts).on('change', browserSync.reload);
  gulp.watch(config.images.src, copyImages).on('change', browserSync.reload);
  gulp.watch(config.assets.src, copyAssets).on('change', browserSync.reload);
};

/**
 * Run BrowserSync
 */
const runServer = done => {
  browserSync.init({
    server: {
      baseDir: config.browserSync.baseDir
    }
  });

  done();
};

/**
 * Serve task
 */
gulp.task('serve', runServer);

/**
 * Development task
 */
gulp.task('default', gulp.series(clean, gulp.parallel(copy, compile), 'serve', watch));

/**
 * Build application
 */
gulp.task('build', gulp.series(clean, gulp.parallel(copy, compile), parseHtml));
