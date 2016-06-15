/**
 * Consumes the Seniority Table
 */

(function (){
    angular.module('Humanity')
        .factory("SeniorityFactory", seniorityApi);

    var seniorityEndPoint = globalConfig.apiEndpoint + "/seniority/:id";
    
    function seniorityApi (r) {
        return r(seniorityEndPoint, {id:'@id', sort:'name'}, { update: {method:'PUT' }});
    }
    seniorityApi.$inject = ['$resource'];    
})();
