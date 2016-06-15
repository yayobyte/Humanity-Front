/**
 * Consumes the EPS Table
 */

(function (){
    angular.module('Humanity')
        .factory("EpsFactory", epsApi);

    var epsEndPoint = globalConfig.apiEndpoint + "/eps/:id";
    
    function epsApi (r) {
        return r(epsEndPoint, {id:'@id', sort:'name'}, { update: {method:'PUT' }});
    }
    epsApi.$inject = ['$resource'];     
})();
