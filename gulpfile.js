/**
 * Created by VP08 on 10/02/2016.
 */
var concat = require('gulp-concat');
var gulp = require('gulp');
var nodeModules = './node_modules'
var src = './src';
var dist = './dist';

/***************** JAVASCRIPT **************/
gulp.task('js:vendors', function() {
    return gulp.src([

        nodeModules + '/angular/angular.min.js',
        nodeModules + '/angular-resource/angular-resource.min.js',
        nodeModules + '/angular-route/angular-route.min.js',
        nodeModules + '/jquery/dist/jquery.min.js',
        nodeModules + '/bootstrap/dist/js/bootstrap.min.js'
        //nodeModules + '/angular-bootstrap/**/*.min.js'
    ])
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest(dist + '/js'));
});

gulp.task('js:app', function (){
    return gulp.src([
        src + '/js/**/*.js'
    ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest(dist + '/js'))
        ;
});

/****************** CSS **********************/
gulp.task('css:styles', function() {
    return gulp.src([
            src + '/css/vendors/**/*.css',
            src + '/css/**/*.css',

            //nodeModules + '/bootstrap/dist/css/**/*.min.css'
        ])
        .pipe(concat('all.css'))
        .pipe(gulp.dest(dist + '/css'));
});

/****************** HTML *********************/
gulp.task('html:index', function() {
    return gulp.src(src + '/index.html')
        .pipe(gulp.dest(dist));
});

gulp.task('html:views', function (){
    return gulp.src([
            src + '/views/**/*.html'
        ])
        .pipe(gulp.dest(dist + '/html'))
        ;
});

/******************** OTHER *******************/
gulp.task('fonts', function (){
    return gulp.src([
            nodeModules + '/bootstrap/dist/fonts/**/*'
        ])
        .pipe(gulp.dest(dist + '/fonts'))
        ;
});

gulp.task('img', function (){
    return gulp.src([
            src + '/img/**/*'
        ])
        .pipe(gulp.dest(dist + '/img'))
        ;
});

/********************* WATCHERS *****************/
gulp.task('watchers', function(){
    gulp.watch(src + '/js/**/*.js', ['js:app','js:vendors']);
    gulp.watch(src + '/views/**/*.html', ['html:views']);
    gulp.watch(src + '/css/**/*.css', ['html:styles']);
    gulp.watch(src + '/index.html', ['html:index']);
});


/********************** GULP TASKS *******************/
gulp.task('default', [
    'html:index',
    'js:app',
    'js:vendors',
    'css:styles',
    'html:views',
    'fonts',
    'img',
    'watchers'
])


