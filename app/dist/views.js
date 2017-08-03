webpackJsonp([2],{

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(34);
__webpack_require__(35);
__webpack_require__(36);
__webpack_require__(37);
module.exports = __webpack_require__(38);


/***/ }),

/***/ 34:
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

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('about', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: './views/about/about.template.html',
    controller: 'AboutCtrl'
  });
}]).controller('AboutCtrl', [function () {}]);

/***/ }),

/***/ 36:
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

/***/ 37:
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

/***/ 38:
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

},[33]);