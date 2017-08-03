let projectsDataService = angular.module('projectsDataService', []);

projectsDataService.factory('projectsDataService', function() {
  let projects = [
    {
      name: '"FRESH ARCH" application',
      description: 'System for archiving R&D recipes. Developed using MEAN stack. In progress.',
    },
    {
      name: '"LASER MANAGEMENT SYSTEM" application',
      description: 'System for archiving production orders. Developed using AngularJS. Completed.'
    },
    {
      name: '"WEATHER FORECAST" application',
      description: "Simple widget showing current weather at user's venue. Developed using plain JS. In progress."
    },
    {
      name: '"JS COMPENDIUM" application',
      description: 'Basic app containing some keywords from computer science theory like algorithms, data structures, design patterns and also JavaScript and AngularJS '
    }
  ];

  let getProjects = function() {
    return projects;
  };

  return {
    getProjects: getProjects
  }
});
