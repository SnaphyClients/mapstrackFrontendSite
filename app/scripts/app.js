'use strict';

/**
 * @ngdoc overview
 * @name mapstrackFrontEndApp
 * @description
 * # mapstrackFrontEndApp
 *
 * Main module of the application.
 */
angular
  .module('mapstrackFrontEndApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
