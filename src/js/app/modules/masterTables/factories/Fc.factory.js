/**
 * Consumes the EPS Table
 */

(function (){
    angular.module('Humanity')
        .factory('FcFactory', fcApi);

    var fcEndPoint = globalConfig.apiEndpoint + "/fc/:id";

    function fcApi ($resource) {
        return $resource (fcEndPoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();
