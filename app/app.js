'use strict';
// Declare app level module which depends on views, and components
import angular from 'angular';

function requireAll(r) {
   r.keys().forEach(r);
}

const modules = requireAll(require.context('./components', true, /\.module\.js$/));

angular.module('myApp', [
  'ngRoute',
  'ownerDataService',
  'projectsDataService',
  'menuService',
  'topBar',
  'myHeader',
  'slider',
  'intro',
  'myFooter',
  'copyright',
  'home',
  'about',
  'skills',
  'projects',
  'contact',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
