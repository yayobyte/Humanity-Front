/**
 * Consumes the EPS Table
 */

(function (){
    angular.module('Humanity')
        .factory("EpsFactory", epsApi);

    var epsEndPoint = globalConfig.apiEndpoint + "/eps/:id";

    function epsApi ($resource) {
        return $resource (epsEndPoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();
