/// <reference path="typings/main.d.ts" />

import browser = require("browser-sync");
import connectRewrite = require("connect-modrewrite");
import gulp = require("gulp");
import gulpSass = require("gulp-sass");
import gulpMocha = require("gulp-mocha");
import gulpSourceMaps = require("gulp-sourcemaps");
import gulpTypeScript = require("gulp-typescript");
import rename = require("gulp-rename");
import uglify = require("gulp-uglify");
import typedoc = require("gulp-typedoc");
import typeScript = require("typescript");

let assetsPath: string[] = ["src/favicon.ico"],
  browserSync: any = browser.create(),
  demoTypeScriptPath: string[] = ["demo/*.ts", "demo/**/*.ts"],
  demo1TypeScriptPath: string[] = ["src/module/blog/*.ts", "src/module/blog/**/*.ts"],
  mainTypeScriptPath: string[] = ["src/*.ts", "src/**/*.ts"],
  testTypeScriptPath: string[] = ["test/*.ts", "test/**/*.ts"],
  fontsAssetsPath: string[] = ["node_modules/bootstrap/dist/fonts/*"],
  cssAssetsPath: string[] = ["node_modules/bootstrap/dist/css/bootstrap.css",
                             "node_modules/bootstrap/dist/css/bootstrap-theme.css",
                             "node_modules/prismjs/themes/prism-coy.css",
                             "node_modules/prismjs/plugins/autolinker/prism-autolinker.css",
                             "node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css"],
  sassPath: string[] = ["src/*.scss", "src/**/*.scss"],
  htmlPath: string[] = ["src/*.html", "src/**/*.html"],
  mochaOptsPath: string[] = ["test/mocha.opts"],
  indexHTML = "index.html",
  mainBuildPath = "./build/src/",
  mainTestBuildPath = "./build/test/src/",
  testBuildPath = "./build/test/test/",
  testsPath: string[] = [testBuildPath + "*Spec.js", testBuildPath + "**/*Spec.js"],
  rewriteRule = "!\\.html|\\.js|\\.svg|\\.css|\\.png|\\.jpg|\\.json|\\.map|\\.ts|\\.html$ /client-ui.html [L]",
  mainTypeScriptProject: gulpTypeScript.Project = gulpTypeScript.createProject('src/tsconfig.json'),
  mainTestTypeScriptProject: gulpTypeScript.Project = gulpTypeScript.createProject('test/tsconfig.json'),
  testTypeScriptProject: gulpTypeScript.Project = gulpTypeScript.createProject('test/tsconfig.json'),
  vendorPath: string[] = ["node_modules/systemjs/dist/system.src.js",
                          "node_modules/systemjs/dist/system-polyfills.src.js",
                          "node_modules/es6-module-loader/dist/es6-module-loader.src.js",
                          "node_modules/system-json/json.js",
                          "node_modules/system-text/text.js",
                          "node_modules/prismjs/prism.js",
                          "node_modules/es6-shim/es6-shim.js",
                          "node_modules/prismjs/prism.js",
                          "node_modules/prismjs/components/prism-javascript.js",
                          "node_modules/prismjs/components/prism-typescript.js",
                          "node_modules/prismjs/components/prism-json.js",
                          "node_modules/prismjs/plugins/autolinker/prism-autolinker.js",
                          "node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js"];

gulp.task("default", ["build"], (): void => {
  // NOOP
});

gulp.task("build", ["build::assets",
                    "build::html",
                    "build::sass",
                    "build::css::vendor",
                    "build::js::vendor",
                    "build::main",
                    "build::demo",
                    "build::test"], (): void => {
  // NOOP
});

gulp.task("build::assets", [], (): NodeJS.ReadWriteStream => {
  return gulp.src(assetsPath).
  pipe(gulp.dest(mainBuildPath));
});

gulp.task("build::html", [], (): NodeJS.ReadWriteStream => {
  return gulp.src(htmlPath).
    pipe(gulp.dest(mainBuildPath)).
    pipe(browserSync.reload({ stream: true }));
});

gulp.task("build::demo", ['build::demo::doc'], (): NodeJS.ReadWriteStream => {
  return gulp.src(demoTypeScriptPath).
    pipe(gulp.dest(mainBuildPath + "/demo/"));
});

gulp.task("build::demo::doc", [], (): NodeJS.ReadWriteStream => {
  return gulp.src(demo1TypeScriptPath).
    pipe(typedoc({
            module: "commonjs",
            target: "es5",
            out: mainBuildPath + "/docs/",
            name: "TypeScript Demo"
        }));
});

gulp.task("build::sass", [], (): NodeJS.ReadWriteStream => {

  let sass: NodeJS.ReadWriteStream = gulpSass();
  sass.on("error", gulpSass.logError);

  return gulp.src(sassPath).
    pipe(sass).
    pipe(gulp.dest(mainBuildPath)).
    pipe(browserSync.reload({ stream: true }));
});

gulp.task("build::css::vendor", ['build::fonts::vendor'], (): NodeJS.ReadWriteStream => {
  return gulp.src(cssAssetsPath).
    pipe(gulp.dest(mainBuildPath + "vendor/css/"));
});

gulp.task("build::fonts::vendor", [], (): NodeJS.ReadWriteStream => {
  return gulp.src(fontsAssetsPath).
  pipe(gulp.dest(mainBuildPath + "vendor/fonts/"));
});

gulp.task("build::js::vendor", (): NodeJS.ReadWriteStream => {
  return gulp.src(vendorPath).
    pipe(rename((path: any): void => {
      path.basename = path.basename.replace("\.src", "");
    })).
    pipe(uglify()).
    pipe(gulp.dest(mainBuildPath + "vendor/js/")).
    pipe(browserSync.reload({ stream: true }));
});

gulp.task("build::main", [], (): NodeJS.ReadWriteStream => {

  let result: gulpTypeScript.CompilationStream = gulp.src(mainTypeScriptPath).
  pipe(gulpSourceMaps.init()).
  pipe(gulpTypeScript(mainTypeScriptProject));

  return result.js.pipe(gulpSourceMaps.write()).
    pipe(gulp.dest(mainBuildPath)).
    pipe(browserSync.reload({ stream: true }));
});

gulp.task("build::mainTest", [], (): NodeJS.ReadWriteStream => {

  let result: gulpTypeScript.CompilationStream = gulp.src(mainTypeScriptPath).
    pipe(gulpTypeScript(mainTestTypeScriptProject));

  return result.js.
    pipe(gulp.dest(mainTestBuildPath));
});


gulp.task("build::test", ["build::mocha", "build::mainTest"], (): NodeJS.ReadWriteStream => {

  let result: gulpTypeScript.CompilationStream = gulp.src(testTypeScriptPath).
    pipe(gulpTypeScript(testTypeScriptProject));

  return result.js.
    pipe(gulp.dest(testBuildPath));
});


gulp.task("build::mocha", [], (): NodeJS.ReadWriteStream => {
  return gulp.src(mochaOptsPath).
    pipe(gulp.dest(testBuildPath));
});

gulp.task('test', function () {
  return gulp.src(testsPath, {read: false})
    .pipe(gulpMocha({reporter: 'spec'}));
});

gulp.task("serve", ["build"], (): NodeJS.ReadWriteStream => {

  let sync: any = browserSync.init({
    server: {
      baseDir: mainBuildPath,
      middleware: [
        connectRewrite(["^/api/(.*)$ http://localhost:8934/api/$1 [P]", rewriteRule])
      ]
    },
    open: true,
    startPath: "/" + indexHTML
  });

  gulp.watch(assetsPath, ["build::assets"]);
  gulp.watch(sassPath,   ["build::sass"]);
  gulp.watch(htmlPath,   ["build::html"]);

  gulp.watch(mainTypeScriptPath, ["build::main"]);
  gulp.watch(testTypeScriptPath, ["build::test"]);

  return sync;
});
