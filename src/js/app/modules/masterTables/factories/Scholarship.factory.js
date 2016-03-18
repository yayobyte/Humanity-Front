/**
 * Consumes the Scholarship Master Table
 */
(function (){
    angular.module('Humanity')
        .factory("ScholarshipFactory", scholarshipApi);

    var scholarshipEndPoint = globalConfig.apiEndpoint + "/scholarship/:id";

    function scholarshipApi ($resource){
        return $resource (scholarshipEndPoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();
