/**
* titleCase.directive.js
*
* @description :: Directive to create a Title Case given a value.
* @author :: mstroh
*/
'use strict';

(function (){
  angular.module('Humanity')
      .directive('titleCase',
        function($parse) {
             return {
               require: 'ngModel',
               link: function(scope, element, attrs, modelCtrl) {
                  var capitalize = function(inputValue) {
                     var capitalized = '';

                     if (inputValue === undefined) {
                       inputValue = '';
                     }

                     if (inputValue.length > 0 && inputValue.lastIndexOf(' ') !== -1) {
                         capitalized = inputValue.charAt(0).toUpperCase() +
                            inputValue.substring(1, inputValue.lastIndexOf(' ') + 1) +
                            inputValue.charAt(inputValue.lastIndexOf(' ') + 1).toUpperCase() +
                            inputValue.substring(inputValue.lastIndexOf(' ') + 2);
                     }
                     else {
                       capitalized = inputValue.charAt(0).toUpperCase() +
                                        inputValue.substring(1);
                     }

                     if(capitalized !== inputValue) {
                        modelCtrl.$setViewValue(capitalized);
                        modelCtrl.$render();
                      }
                      return capitalized;
                   }
                   modelCtrl.$parsers.push(capitalize);
                   capitalize($parse(attrs.ngModel)(scope));
               }
             };
           }
         );
})();
