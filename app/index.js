// jquery
import 'jquery';

// bootstrap
import 'bootstrap-loader';
import 'bootstrap-sass';

// styles
import './styles/styles.scss';

// angular
import angular from 'angular';
import directives from './directives';
import services from './services';
import controllers from './controllers';

const App = angular.module('crunchKata', []);

directives(App);
services(App);
controllers(App);