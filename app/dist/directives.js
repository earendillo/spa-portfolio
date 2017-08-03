webpackJsonp([4],{

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(34);


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('changeClass').directive('changeClass', function () {
  return {
    restrict: C,
    link: function link(scope, element) {
      element.bind('click', function (event) {
        element.parent().find('li').removeClass('selected');
        element.addClass('selected');
      });
    }
  };
});

/***/ })

},[33]);