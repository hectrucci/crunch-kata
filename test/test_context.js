require('jquery');
require('angular');
require('angular-mocks/angular-mocks');

const testsContext = require.context('./', true, /_spec\.js$/);
testsContext.keys().forEach(testsContext);

const srcContext = require.context('../app', true, /\.js$/);
srcContext.keys().forEach(srcContext);