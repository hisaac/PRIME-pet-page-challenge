var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/dogs', {
      templateUrl: '/views/templates/dogs.html',
      controller: 'DogsController',
      controllerAs: 'dogs'
    })
    .when('/cats', {
      templateUrl: '/views/templates/cats.html',
      controller: 'CatsController',
      controllerAs: 'cats'
    })
    .when('/reptiles', {
      templateUrl: '/views/templates/reptiles.html',
      controller: 'ReptilesController',
      controllerAs: 'reptiles'
    })
    .otherwise({
      redirectTo: '/dogs'
    });
}]);