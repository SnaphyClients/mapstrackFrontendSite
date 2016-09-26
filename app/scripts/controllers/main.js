'use strict';

/**
 * @ngdoc function
 * @name mapstrackFrontEndApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mapstrackFrontEndApp
 */
angular.module('mapstrackFrontEndApp')
  .controller('MainCtrl', ["$scope", "$window", "$timeout", "Track", "$http", function ($scope, $window, $timeout, Track, $http) {
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
    $scope.notify = {
      loading: false
    };

    /**
     * Get the tracking code for the data..
     * @param trackingCode
       */
    $scope.trackData = function(trackingCode){
      hideNotification();
      if(!trackingCode){
        return;
      }
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
              return $window.location.href = 'https://mapstrack.com/track/' + value.uniqueCode;
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
      $scope.notify.loading = true;

      /*$scope.errorLocation = true;
      //Show notification..
      $scope.notify.errorTypeMessage = false;
      //Message in bold
      $scope.notify.strong = "Loading..";
      $scope.notify.message = "";*/
    };


    var displayError = function(){
      $scope.notify.loading = false;
      
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


    $scope.shareLink = {};

    //SMS download link..
    $scope.getApp = function(number){
      if(!number){
        return;
      }

      number = number.trim();
      if(!number){
        return;
      }


      $http({
        method: 'POST',
        url: 'https://admin.mapstrack.com/api/Customers/sendAppLink',
        data:{
          number: number
        },
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          //console.log("Done");
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          $scope.shareLink.message = "Network problem! Try later.";
        });


      //Clear the number
      $scope.shareLink.mobileNumber = "";

      //display message..
      $scope.shareLink.message = "Download link send to mobile number";

      $timeout(function(){
        $scope.shareLink.message = "";
      }, 5000);

    };




  }]);
