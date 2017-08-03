'use strict';

angular.module('skills', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/skills', {
    templateUrl: './views/skills/skills.template.html',
    controller: 'SkillsCtrl'
  });
}])

.controller('SkillsCtrl', ['$scope', 'ownerDataService', function($scope, ownerDataService) {
  $scope.owner = ownerDataService.getOwner();
}]);
