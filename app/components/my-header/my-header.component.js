'use strict'

angular.module('myApp')

  .component('myHeader', {
    templateUrl: 'components/my-header/my-header.template.html',
    controller: ['$scope', 'ownerDataService', 'menuService', function($scope, ownerDataService, menuService) {

      $scope.owner = ownerDataService.getOwner();
    }]
  });
