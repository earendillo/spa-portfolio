'use strict';

angular.module('about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'about/about.template.html',
    controller: 'AboutCtrl'
  });
}])

.controller('AboutCtrl', [function() {

}]);
