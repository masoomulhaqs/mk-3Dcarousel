const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const stylish = require('jshint-stylish');
const browserSync = require('browser-sync').create();

const base = {
  npm: './node_modules/',
  src: "./src/",
  dest: "./dist/",
  docs: "./docs/",
  app: "./app/"
}
const config = {
  plugin_name: 'mk-3dcarousel',
  base: base,
  styles: {
    src: base.src + 'scss/*.scss',
    dest: base.dest
  },
  scripts: {
    src: base.src + 'js/*.js',
    dest: base.dest
  },
  docs: {
    src: [
      base.src + '*.html'
    ],
    dest: base.docs
  },
  app_styles: {
    src: [
      base.dest + 'mk-3dcarousel.css',
      base.app + 'scss/*.scss'
    ],
    dest: base.docs
  },
  app_scripts: {
    src: [
      base.npm + 'jquery/dist/jquery.js',
      base.dest + 'mk-3dcarousel.js',
      base.app + 'js/*.js'
    ],
    dest: base.docs
  },
  app_images: {
    src: base.app + 'images/**/*',
    dest: base.docs
  }
};

gulp.task('build:styles', function() {

  var sass_options = {
    sourcemaps: true
  };
  var autoprefixer_options = {
    browsers: [ 'last 2 versions', 'IE >= 8', 'Firefox >= 20']
  };

  return gulp.src(config.styles.src)
    .pipe(plugins.sass(sass_options).on('error', function (err) {
      console.error('Error!', err.message);
    }))
    .pipe(plugins.autoprefixer(autoprefixer_options))
    .pipe(plugins.rename(function(path) {
      path.basename = config.plugin_name;
    }))
    .pipe(gulp.dest(config.styles.dest))
    .pipe(plugins.cssmin())
    .pipe(plugins.rename(function(path) {
      path.basename = config.plugin_name + ".min";
    }))
    .pipe(gulp.dest(config.styles.dest));
});

gulp.task('build:scripts', function () {
  gulp.src(config.scripts.src)
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter(stylish))
    .pipe(plugins.uglify())
    .pipe(plugins.rename(function(path) {
      path.basename = config.plugin_name + ".min";
    }))
    .pipe(gulp.dest(config.scripts.dest))
    .pipe(plugins.jsbeautify({ indentSize: 1 }))
    .pipe(plugins.rename(function(path) {
      path.basename = config.plugin_name;
    }))
    .pipe(gulp.dest(config.scripts.dest));
});

gulp.task('build', ['build:styles', 'build:scripts', 'build:docs']);

gulp.task('build:app_styles', function () {

  var sass_options = {
    includePaths: './dist'
  };

  return gulp.src(config.app_styles.src)
    .pipe(plugins.sass(sass_options).on('error', function (err) {
      console.error('Error!', err.message);
    }))
    .pipe(plugins.cssmin())
    .pipe(plugins.concat('app.css'))
    .pipe(gulp.dest(config.app_styles.dest))
    .pipe(browserSync.stream({reload: true}));
});
gulp.task('build:app_scripts', function () {
  gulp.src(config.app_scripts.src)
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter(stylish))
    .pipe(plugins.uglify())
    .pipe(plugins.concat('app.js'))
    .pipe(gulp.dest(config.app_scripts.dest))
    .pipe(browserSync.stream({reload: true}));
});

gulp.task('build:app_images', function () {
  gulp.src(config.app_images.src)
    .pipe(gulp.dest(config.app_images.dest))
    .pipe(browserSync.stream({reload: true}));
});

gulp.task('build:docs', ['build:app_scripts', 'build:app_images' ,'build:app_styles'], function() {
  gulp.src(config.docs.src)
    .pipe(gulp.dest(config.docs.dest))
    .pipe(browserSync.stream({reload: true}));
});

gulp.task('watch', function() {

  plugins.watch(config.styles.src, function(){
    gulp.start('build:styles');
  });
  plugins.watch(config.scripts.src, function(){
    gulp.start('build:scripts');
  });
  plugins.watch(config.app_images.src, function(){
    gulp.start('build:app_images');
  });
  plugins.watch(config.app_styles.src, function(){
    gulp.start('build:app_styles');
  });
  plugins.watch(config.app_scripts.src, function(){
    gulp.start('build:app_scripts');
  });
  plugins.watch(config.docs.src, function(){
    gulp.start('build:docs');
  });

});

gulp.task('serve', ['build'], function() {

  browserSync.init({
      server: {
          baseDir: config.base.docs
      }
  });

});

gulp.task('default', ['watch', 'serve']);
