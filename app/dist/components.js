webpackJsonp([0],Array(19).concat([
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(20);
__webpack_require__(21);
__webpack_require__(22);
__webpack_require__(23);
__webpack_require__(24);
__webpack_require__(25);
__webpack_require__(26);
__webpack_require__(27);
__webpack_require__(28);
__webpack_require__(29);
__webpack_require__(30);
__webpack_require__(31);
module.exports = __webpack_require__(32);


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('myFooter').component('blog', {
  templateUrl: 'components/blog/blog.template.html'
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('myApp').component('topBar', {
  templateUrl: 'components/top-bar/top-bar.template.html',
  controller: 'TopBarCtrl'
}).controller('TopBarCtrl', ['$scope', 'menuService', function ($scope, menuService) {
  $scope.socialMenuItems = menuService.getSocialItems();
  $scope.contentMenuItems = menuService.getContentItems();

  $scope.selectedItem = $scope.contentMenuItems[0];

  $scope.select = function (item) {
    $scope.selectedItem = item;
  };
}]);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('myApp').component('myHeader', {
  templateUrl: 'components/my-header/my-header.template.html',
  controller: ['$scope', 'ownerDataService', 'menuService', function ($scope, ownerDataService, menuService) {

    $scope.owner = ownerDataService.getOwner();
  }]
});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('myApp').component('slider', {
  templateUrl: 'components/slider/slider.template.html',
  controller: ['$scope', 'ownerDataService', function ($scope, ownerDataService) {

    $scope.owner = ownerDataService.getOwner();
  }]
});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('myApp').component('intro', {
  templateUrl: 'components/intro/intro.template.html',
  controller: 'ProjectsCtrl'
}).controller('ProjectsCtrl', ['$scope', 'projectsDataService', function ($scope, projectsDataService) {
  $scope.projects = projectsDataService.getProjects();
}]);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('myApp').component('myFooter', {
  templateUrl: 'components/my-footer/my-footer.template.html'
});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('myApp').component('copyright', {
  templateUrl: 'components/copyright/copyright.template.html'
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('myFooter').component('quickLinks', {
  templateUrl: 'components/quick-links/quick-links.template.html'
});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('myFooter').component('contactForm', {
  templateUrl: 'components/contact-form/contact-form.template.html'
});

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('myFooter').component('tweets', {
  templateUrl: 'components/tweets/tweets.template.html'
});

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('myApp.version', ['myApp.version.interpolate-filter', 'myApp.version.version-directive']).value('version', '0.1');

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('myApp.version.version-directive', []).directive('appVersion', ['version', function (version) {
  return function (scope, elm, attrs) {
    elm.text(version);
  };
}]);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('myApp.version.interpolate-filter', []).filter('interpolate', ['version', function (version) {
  return function (text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  };
}]);

/***/ })
]),[19]);