'use strict';

angular.module('contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: './views/contact/contact.template.html',
    controller: 'ContactCtrl'
  });
}])

.controller('ContactCtrl', ['$scope', 'ownerDataService', function($scope, ownerDataService) {
  $scope.owner = ownerDataService.getOwner();
}]);
