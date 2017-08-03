let ownerDataService = angular.module('ownerDataService', []);

ownerDataService.factory('ownerDataService', function() {
  let owner = {
    name: 'Imie Nazwisko',
    email: 'asdf.asdf@asdf.com',
    phone: '+48 321-123-321',
    skills: [
      {id: 'js', name: 'JavaScript ES5/ES6'},
      {id: 'ng', name: 'AngularJS'},
      {id: 'node', name: 'NodeJS'},
      {id: 'html', name: 'HTML5'},
      {id: 'css', name: 'CSS3'},
      {id: 'less', name: 'LESS'},
      {id: 'rwd', name: 'RWD'},
      {id: 'git', name: 'GIT'},
      {id: 'wp', name: 'Webpack'},
    ],
    class: 'Junior Front-End Developer'
  };

  let getOwner = function() {
    return owner;
  };

  return {
    getOwner: getOwner
  };
});
