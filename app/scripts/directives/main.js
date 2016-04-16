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

 /* //On save modal close..reset the form..
  .directive('init', ['$timeout', function($timeout) {
    return {
      restrict: 'A',
      link: function(scope, iElement, iAttrs) {
        $timeout(function(){
          LoadMapstrack();
        });
      } //End of Link function...
    }; // End of return
  }])
*/
  .directive("mtFaq", ["$timeout", function () {
    return{
      restrict:"E",
      replace: true,
      scope:{
        question: "=question",
        description: "=description",
        active: "=active"
      },
      template: '<div class="faq-accordion to-animate" ng-class="{\'active\': active}">'+
                  '<span  class="faq-accordion-icon-toggle" ng-class="{\'active\': active}"><i class="icon-arrow-down"></i></span>'+
                  '<h3>{{question}}</h3>'+
                  '<div ng-if="active" class="faq-body" style="display: block;">'+
                    '<p class="appFeaturesDescription">' +
                        '{{description}}' +
                    '</p>'+
                  '</div>' +
                  '<div ng-if="!active" class="faq-body">'+
                    '<p class="appFeaturesDescription">' +
                        '{{description}}' +
                    '</p>'+
                  '</div>' +
                '</div>',
      link: function(scope, iElement, iAttrs){
        //LoadMapstrack();
      }
    }
  }]);

