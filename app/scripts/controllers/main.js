'use strict';

/**
 * @ngdoc function
 * @name mapstrackFrontEndApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mapstrackFrontEndApp
 */
angular.module('mapstrackFrontEndApp')
  .controller('MainCtrl', ["$scope", "$window", "$timeout", function ($scope, $window, $timeout) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.faqs = faqs;
    $scope.pageData = pageData;
    $scope.year = new Date().getFullYear();

    /**
     * Get the tracking code for the data..
     * @param trackingCode
       */
    $scope.trackData = function(trackingCode){
      //console.log(trackingCode);
      if(!trackingCode){
        return;
      }

      if(trackingCode.trim() !== ""){
        //Now redirect to another page..
        $window.location.href = 'track/' + trackingCode;
      }

    };

    $scope.loadPlugins = function(){
      $timeout(function(){
        $window.LoadMapstrack();
      }, 10);
    };




  }]);
