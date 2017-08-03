webpackJsonp([3],{

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(16);
__webpack_require__(17);
module.exports = __webpack_require__(18);


/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var menuService = angular.module('menuService', []);

menuService.factory('menuService', function () {
  var socialItems = [{
    url: '#linkedin',
    faClass: 'fa fa-linkedin',
    social: 'linkedin'
  }, {
    url: '#twitter',
    faClass: 'fa fa-twitter',
    social: 'twitter'
  }, {
    url: '#github',
    faClass: 'fa fa-github',
    social: 'github'
  }, {
    url: '#facebook',
    faClass: 'fa fa-facebook',
    social: 'facebook'
  }];

  var contentItems = [{
    name: 'Home',
    url: 'home'
  }, {
    name: 'About me',
    url: 'about'
  }, {
    name: 'Skills',
    url: 'skills'
  }, {
    name: 'Projects',
    url: 'projects'
  }, {
    name: 'Contact',
    url: 'contact'
  }];

  var getSocialItems = function getSocialItems() {
    return socialItems;
  };

  var getContentItems = function getContentItems() {
    return contentItems;
  };

  return {
    getSocialItems: getSocialItems,
    getContentItems: getContentItems
  };
});

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ownerDataService = angular.module('ownerDataService', []);

ownerDataService.factory('ownerDataService', function () {
  var owner = {
    name: 'Imie Nazwisko',
    email: 'asdf.asdf@asdf.com',
    phone: '+48 321-123-321',
    skills: [{ id: 'js', name: 'JavaScript ES5/ES6' }, { id: 'ng', name: 'AngularJS' }, { id: 'node', name: 'NodeJS' }, { id: 'html', name: 'HTML5' }, { id: 'css', name: 'CSS3' }, { id: 'less', name: 'LESS' }, { id: 'rwd', name: 'RWD' }, { id: 'git', name: 'GIT' }, { id: 'wp', name: 'Webpack' }],
    class: 'Junior Front-End Developer'
  };

  var getOwner = function getOwner() {
    return owner;
  };

  return {
    getOwner: getOwner
  };
});

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var projectsDataService = angular.module('projectsDataService', []);

projectsDataService.factory('projectsDataService', function () {
  var projects = [{
    name: '"FRESH ARCH" application',
    description: 'System for archiving R&D recipes. Developed using MEAN stack. In progress.'
  }, {
    name: '"LASER MANAGEMENT SYSTEM" application',
    description: 'System for archiving production orders. Developed using AngularJS. Completed.'
  }, {
    name: '"WEATHER FORECAST" application',
    description: "Simple widget showing current weather at user's venue. Developed using plain JS. In progress."
  }, {
    name: '"JS COMPENDIUM" application',
    description: 'Basic app containing some keywords from computer science theory like algorithms, data structures, design patterns and also JavaScript and AngularJS '
  }];

  var getProjects = function getProjects() {
    return projects;
  };

  return {
    getProjects: getProjects
  };
});

/***/ })

},[15]);