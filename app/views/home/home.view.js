'use strict';

angular.module('home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: './views/home/home.template.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', 'ownerDataService', function($scope, ownerDataService) {
  $scope.owner = ownerDataService.getOwner();
}]);
