/**
 * Consumes the Country table
 */
'use strict';
(function (){
    angular.module('Humanity')
        .factory('NationalityFactory',nationalityApi);

    var nationalityApiEndpoint = globalConfig.apiEndpoint + "/country/:id" ;

    function nationalityApi (r) {
        return r(nationalityApiEndpoint, {id:'@id', sort:'name'}, { update: {method:'PUT' }});
    }
    nationalityApi.$inject = ['$resource'];
})();
