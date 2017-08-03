'use strict'

angular.module('myApp')

  .component('slider', {
    templateUrl: 'components/slider/slider.template.html',
    controller: ['$scope', 'ownerDataService', function($scope, ownerDataService) {

      $scope.owner = ownerDataService.getOwner();


    }]
  });
