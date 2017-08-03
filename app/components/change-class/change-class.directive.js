'use strict'

angular.module('changeClass')

  .directive('changeClass', function() {
    return {
      restrict: C,
      link: function(scope, element) {
        element.bind('click', function(event) {
          element.parent().find('li').removeClass('selected');
          element.addClass('selected');
        });
      }
    }
  });
