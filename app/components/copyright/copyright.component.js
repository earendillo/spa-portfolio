'use strict'

angular.module('myApp')

  .component('copyright', {
    templateUrl: 'components/copyright/copyright.template.html',
    controller: 'CopyrightCtrl'
  })

  .controller('CopyrightCtrl',  ['$scope', 'ownerDataService', function($scope, ownerDataService)  {
    $scope.owner = ownerDataService.getOwner();
  }])
