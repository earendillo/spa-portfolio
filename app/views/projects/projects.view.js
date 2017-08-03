'use strict';

angular.module('projects', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/projects', {
    templateUrl: './views/projects/projects.template.html',
    controller: 'ProjectsCtrl'
  });
}])

.controller('Projects', ['$scope', 'projectsDataService', function($scope, projectsDataService) {
  $scope.projects = projectsDataService.getProjects();
}]);
