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
    'ngRoute',
    'lbServices'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
/*
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
*/

  });
