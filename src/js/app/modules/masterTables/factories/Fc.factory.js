/**
 * Consumes the FC Table
 */

(function (){
    angular.module('Humanity')
        .factory('FcFactory', fcApi);

    var fcEndPoint = globalConfig.apiEndpoint + "/fc/:id";

    function fcApi (r) {
        return r(fcEndPoint, {id:'@id', sort:'name'}, { update: {method:'PUT' }});
    }
    fcApi.$inject = ['$resource']; 
})();
