webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Declare app level module which depends on views, and components

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function requireAll(r) {
  r.keys().forEach(r);
}

var modules = requireAll(__webpack_require__(3));

_angular2.default.module('myApp', ['ngRoute', 'ownerDataService', 'projectsDataService', 'menuService', 'topBar', 'myHeader', 'slider', 'intro', 'myFooter', 'copyright', 'home', 'about', 'skills', 'projects', 'contact', 'myApp.view1', 'myApp.view2', 'myApp.version']).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({ redirectTo: '/home' });
}]);

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./blog/blog.module.js": 4,
	"./change-class/change-class.module.js": 5,
	"./contact-form/contact-form.module.js": 6,
	"./copyright/copyright.module.js": 7,
	"./intro/intro.module.js": 8,
	"./my-footer/my-footer.module.js": 9,
	"./my-header/my-header.module.js": 10,
	"./quick-links/quick-links.module.js": 11,
	"./slider/slider.module.js": 12,
	"./top-bar/top-bar.module.js": 13,
	"./tweets/tweets.module.js": 14
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 3;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('blog', []);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('changeClass', []);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('contactForm', []);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('copyright', []);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('intro', []);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('myFooter', ['quickLinks', 'contactForm', 'tweets', 'blog']);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('myHeader', []);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('quickLinks', []);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('slider', []);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('topBar', []);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('tweets', []);

/***/ })
],[1]);