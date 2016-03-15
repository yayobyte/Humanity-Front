/**
 * Consumes the Scholarship Master Table
 */
(function (){
    angular.module('Humanity')
        .factory("ScholarshipFactory", scholarshipApi);

    var sailsEndpoint = "http://localhost:1337";
    var scholarshipEndPoint = sailsEndpoint + "/scholarship/:id";

    function scholarshipApi ($resource){
        return $resource (scholarshipEndPoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();
