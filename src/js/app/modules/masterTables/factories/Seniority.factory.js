/**
 * Consumes the Seniority Table
 */

(function (){
    angular.module('Humanity')
        .factory("SeniorityFactory", seniorityApi);

    var seniorityEndPoint = globalConfig.apiEndpoint + "/seniority/:id";

    function seniorityApi ($resource){
        return $resource (seniorityEndPoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();
