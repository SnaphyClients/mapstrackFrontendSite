'use strict';

/**
 * @ngdoc function
 * @name mapstrackFrontEndApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mapstrackFrontEndApp
 */
angular.module('mapstrackFrontEndApp')
  .controller('MainCtrl', ["$scope", "$window", "$timeout", "Track", function ($scope, $window, $timeout, Track) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.faqs = faqs;
    $scope.pageData = pageData;
    $scope.year = new Date().getFullYear();
    $scope.errorLocation = false;

    //Initializing notify type message for disaplying notices.
    $scope.notify = {};

    /**
     * Get the tracking code for the data..
     * @param trackingCode
       */
    $scope.trackData = function(trackingCode){
      hideNotification();
      displayLoading();
      var filter = {
        where:
        {
          or:
          [
            { 
              uniqueCode:trackingCode, "status": "allow"
            }, 
            {
              locationId: trackingCode, 
              "isPublic": "public", 
              "status": "allow"
            }
          ]
        }
      };
      Track.findOne({
        filter: filter
      }, function(value, respHeader){
        if(value){
          if(value.uniqueCode){
            var trackingCode = value.uniqueCode;
              hideNotification();
              //Now redirect to another page..
              return $window.location.href = 'https://admin.mapstrack.com/track/' + value.uniqueCode;
          }
        }

        //else show error message
        displayError();
      }, function(err){
        hideNotification();
        //else show error message
        displayError();
        console.error("Error fetching location Id or unique code");
        console.error(err);
      });

    };


    var displayLoading = function(){
      $scope.errorLocation = true;
      //Show notification..
      $scope.notify.errorTypeMessage = false;
      //Message in bold
      $scope.notify.strong = "Loading..";
      $scope.notify.message = "";
    };


    var displayError = function(){
      $scope.errorLocation = true;
      //Show notification..
      $scope.notify.errorTypeMessage = true;
      //Message in bold
      $scope.notify.strong = "Invalid";
      $scope.notify.message = "location id or unique code";
    };

    var hideNotification = function(){
      $scope.errorLocation = false;
    };



    $scope.loadPlugins = function(){
      $timeout(function(){
        $window.LoadMapstrack();
      }, 10);
    };

    $scope.closeAlert = function(id){
      $(id).alert('close')
    };





  }]);
