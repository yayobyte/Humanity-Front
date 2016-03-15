(function () {
    'use strict';
    angular.module('Humanity')
        .directive('ieValidation', ieValidation);

    function ieValidation () {
        return {
            restrict : 'E',
            templateUrl : 'html/generic/directives/ie-validation.html'
        };
    }
})();
