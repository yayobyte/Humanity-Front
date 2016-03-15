/**
 * Consumes the AFP Table
 */

(function (){
    angular.module('Humanity')
        .factory("AfpFactory", afpApi);

    var sailsEndpoint = "http://localhost:1337";
    var afpEndpoint = sailsEndpoint + "/afp/:id" ;

    function afpApi ($resource) {
        return $resource(afpEndpoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();
