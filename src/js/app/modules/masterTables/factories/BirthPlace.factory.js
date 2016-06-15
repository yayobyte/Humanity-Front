/**
 * Consumes the birthplace table
 */
'use strict';
(function (){
    angular.module('Humanity')
        .factory('BirthPlaceFactory',birthPlaceApi);

    var birthPlaceApiEndpoint = globalConfig.apiEndpoint + "/birthplace/:id" ;

    function birthPlaceApi (r) {
        return r(birthPlaceApiEndpoint, {id:'@id', sort:'name'}, { update: {method:'PUT' }});
    }
    birthPlaceApi.$inject = ['$resource'];
})();
