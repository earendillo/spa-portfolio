let menuService = angular.module('menuService', []);

menuService.factory('menuService', function() {
  let socialItems = [
    {
      url: '#linkedin',
      faClass: 'fa fa-linkedin',
      social: 'linkedin'
    },
    {
      url: '#twitter',
      faClass: 'fa fa-twitter',
      social: 'twitter'
    },
    {
      url: '#github',
      faClass: 'fa fa-github',
      social: 'github'
    },
    {
      url: '#facebook',
      faClass: 'fa fa-facebook',
      social: 'facebook'
    },
  ];

  let contentItems = [
    {
      name: 'Home',
      url: 'home'
    },
    {
      name: 'About me',
      url: 'about'
    },
    {
      name: 'Skills',
      url: 'skills'
    },
    {
      name: 'Projects',
      url: 'projects'
    },
    {
      name: 'Contact',
      url: 'contact'
    },
  ];

  let getSocialItems = function() {
    return socialItems;
  };

  let getContentItems = function() {
    return contentItems
  };

  return {
    getSocialItems: getSocialItems,
    getContentItems: getContentItems
  }
});
