/**
 * Consumes the Seniority Table
 */

(function (){
    angular.module('Humanity')
        .factory("SeniorityFactory", seniorityApi);

    var sailsEndpoint = "http://localhost:1337";
    var seniorityEndPoint = sailsEndpoint + "/seniority/:id";

    function seniorityApi ($resource){
        return $resource (seniorityEndPoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();
