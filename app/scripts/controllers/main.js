'use strict';

/**
 * @ngdoc function
 * @name mapstrackFrontEndApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mapstrackFrontEndApp
 */
angular.module('mapstrackFrontEndApp')
  .controller('MainCtrl', ["$scope", "$window", function ($scope, $window) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    /**
     * Get the tracking code for the data..
     * @param trackingCode
       */
    $scope.trackData = function(trackingCode){
      console.log(trackingCode);
      if(!trackingCode){
        return;
      }

      if(trackingCode.trim() !== ""){
        //Now redirect to another page..
        $window.location.href = 'track/' + trackingCode;
      }

    };



  }]);
