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

/*

  //Autocomplete for selectize search..
  .directive('autocomplete', ['Track', '$timeout', function(Track, $timeout) {
    // Runs during compile
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      scope:{
        "modelName"      : "@modelName",
        "searchProperty" : "@searchProperty",
        //Contains the value of the data.. that needs to be updated.
        "value"          : "=value"
      },
      template: '<select  ng-transclude><option value=""></option></select>' ,
      link: function(scope, iElm, iAttrs, controller) {
        if(!scope.modelName || !scope.searchProperty){
          console.error("Error >>> searchProperty and modelName attributes are required");
          return false;
        }

        scope.placeholder = "Search ".toUpperCase() + scope.modelName.toUpperCase() + " " + scope.searchProperty.toUpperCase();
        $(iElm).attr("placeholder", scope.placeholder);

        var selectize_ = $(iElm).selectize({
          maxItems: 1,
          valueField: 'id',
          labelField: scope.searchProperty,
          searchField: scope.searchProperty,
          delimiter: ',',
          persist: false,
          create: false,
          render: {
            option: function(item, escape) {
              return '<div class="row">' +
                (item[scope.searchProperty] ? '<span class="col-md-3 " ><strong>' + escape(item[scope.searchProperty]) + '</strong></span>' : '') +
                '<div class="row">' +
                (item["firstName"] ? '<span class="col-md-3 " ><strong>' + escape(item["firstName"]) + " " + item["lastName"] + '</strong></span>' : '') +
                '</div>' +
                '</div>';

            }
          },
          load: function(query, callback) {
            if (!query.length) return callback();
            var that = this;

            var whereObj = {};
            whereObj[scope.searchProperty] = {};

            whereObj[scope.searchProperty].like = query;

            dbService.find({
              filter: {
                limit: 10,
                where: whereObj
              }
            }, function(values, headers) {
              callback(values);
            }, function(httpResp) {
              console.log(httpResp);
              callback();
            });
          }, //load function..

          onItemRemove: function(value, $item){
            $timeout(function () {
              //clear the value..
              scope.value = "";
            }, 0);
          },

          onItemAdd: function(value, $item){
            var select = $(iElm).selectize();
            var selectize = select[0].selectize;
            //Add this value to the scope.
            var val = $.map(selectize.items, function(value) {
              return selectize.options[value];
            });
            $timeout(function () {
              //remove the order attribute of selectize..
              if(val[0].$order){
                delete val[0].$order;
              }
              scope.value = val[0];
            }, 0);

          }
        }); //END OF Selectize function..



        //adding items programatically..
        function addValue(item){
          var select = $(iElm).selectize();
          var selectize = select[0].selectize;
          var obj = {};
          obj = item;
          obj.id = item.id;
          obj[scope.searchProperty] = item[scope.searchProperty];

          selectize.addOption(obj);
          selectize.addItem(item.id);
        }


        scope.$watch('value', function(){
          if(!$.isEmptyObject(scope.value)){
            //check if the selectize has that value in options if not then load it..
            var select = $(iElm).selectize();
            var selectize = select[0].selectize;
            //Add this value to the scope.
            var val = $.map(selectize.items, function(value) {
              return selectize.options[value];
            });
            if(val.length === 0){
              //Now check if the model has value or not..
              if(!$.isEmptyObject(scope.value)){
                //Now add data
                addValue(scope.value);
              }
            }
          }
          else{
            $timeout(function(){
              var select = $(iElm).selectize();
              var selectize = select[0].selectize;
              selectize.clear();
            }, 0);
          }

        });


      } //LInk  function
    }; //END Return
  }]);
*/



