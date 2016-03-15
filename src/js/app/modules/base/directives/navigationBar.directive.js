(function () {
    'use strict';
    angular.module('Humanity')
        .directive('navigationBar', navigationBar);

    function navigationBar () {
        return {
            restrict : 'E',
            templateUrl : 'html/generic/directives/navigation-bar.html'
        }
    }
})();
