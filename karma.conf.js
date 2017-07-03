// Karma configuration
// Generated on Fri Jun 30 2017 03:07:19 GMT+0000 (UTC)
// 
const path = require('path');
const webpackConfig = require('./webpack.config');
const entry = path.resolve(webpackConfig.context, webpackConfig.entry);
const preprocessors = {};
preprocessors[entry] = ['webpack'];

console.log('entry');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [
        'test/test_context.js'
    ],
    webpack: webpackConfig,


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'test/test_context.js': ['webpack', 'sourcemap'],
        'app/**/*.js': ['coverage', 'sourcemap']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage-istanbul'],
    
    coverageIstanbulReporter: {
        reports: ['text-summary'],
        fixWebpackSourcePaths: true
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    plugins: [
        require('karma-webpack'),
        'karma-chai',
        'karma-mocha',
        'karma-phantomjs-launcher',
        'karma-coverage',
        'karma-sourcemap-loader',
        'karma-coverage-istanbul-reporter'
    ],

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
