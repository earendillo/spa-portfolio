webpackJsonp([2],{

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(36);
__webpack_require__(37);
__webpack_require__(38);
__webpack_require__(39);
__webpack_require__(40);
__webpack_require__(41);
module.exports = __webpack_require__(42);


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('myApp.view1', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}]).controller('View1Ctrl', [function () {}]);

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('myApp.view2', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}]).controller('View2Ctrl', [function () {}]);

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('home', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: './views/home/home.template.html',
    controller: 'HomeCtrl'
  });
}]).controller('HomeCtrl', ['$scope', 'ownerDataService', function ($scope, ownerDataService) {
  $scope.owner = ownerDataService.getOwner();
}]);

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('about', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: './views/about/about.template.html',
    controller: 'AboutCtrl'
  });
}]).controller('AboutCtrl', [function () {}]);

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('skills', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/skills', {
    templateUrl: './views/skills/skills.template.html',
    controller: 'SkillsCtrl'
  });
}]).controller('SkillsCtrl', ['$scope', 'ownerDataService', function ($scope, ownerDataService) {
  $scope.owner = ownerDataService.getOwner();
}]);

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('projects', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/projects', {
    templateUrl: './views/projects/projects.template.html',
    controller: 'ProjectsCtrl'
  });
}]).controller('Projects', ['$scope', 'projectsDataService', function ($scope, projectsDataService) {
  $scope.projects = projectsDataService.getProjects();
}]);

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('contact', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: './views/contact/contact.template.html',
    controller: 'ContactCtrl'
  });
}]).controller('ContactCtrl', ['$scope', 'ownerDataService', function ($scope, ownerDataService) {
  $scope.owner = ownerDataService.getOwner();
}]);

/***/ })

},[35]);