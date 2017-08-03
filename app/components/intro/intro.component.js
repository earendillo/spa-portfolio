'use strict'

angular.module('myApp')

  .component('intro', {
    templateUrl: 'components/intro/intro.template.html',
    controller: 'ProjectsCtrl'
  })

  .controller('ProjectsCtrl', ['$scope', 'projectsDataService', function($scope, projectsDataService) {
    $scope.projects = projectsDataService.getProjects();
  }])
