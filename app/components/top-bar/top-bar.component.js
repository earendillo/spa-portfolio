'use strict'

angular.module('myApp')

  .component('topBar', {
    templateUrl: 'components/top-bar/top-bar.template.html',
    controller: 'TopBarCtrl'
  })

  .controller('TopBarCtrl', ['$scope', 'menuService', function($scope, menuService) {
    $scope.socialMenuItems = menuService.getSocialItems();
    $scope.contentMenuItems = menuService.getContentItems();

    $scope.selectedItem = $scope.contentMenuItems[0];

    $scope.select = function(item) {
      $scope.selectedItem = item;
    }

  }]);
