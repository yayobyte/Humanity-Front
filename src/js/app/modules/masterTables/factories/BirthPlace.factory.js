/**
 * Consumes the birthplace table
 */
'use strict';
(function (){
    angular.module('Humanity')
        .factory('BirthPlaceFactory',birthPlaceApi);

    var birthPlaceApiEndpoint = globalConfig.apiEndpoint + "/birthplace/:id" ;

    function birthPlaceApi ($resource) {
        return $resource(birthPlaceApiEndpoint, {id:'@id'}, { update: {method:'PUT' }});
    }

})();
