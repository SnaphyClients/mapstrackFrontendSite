'use strict';

/**
 * @ngdoc overview
 * @name mapstrackFrontEndApp
 * @description
 * # mapstrackFrontEndApp
 *
 * Directive of the application.
 */
angular.module('mapstrackFrontEndApp')

  //On save modal close..reset the form..
  .directive('init', ['$timeout', function($timeout) {
    return {
      restrict: 'A',
      link: function(scope, iElement, iAttrs) {
        $timeout(function(){
          LoadMapstrack();
        });
      } //End of Link function...
    }; // End of return
  }]);


