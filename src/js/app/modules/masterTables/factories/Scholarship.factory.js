/**
 * Consumes the Scholarship Master Table
 */
(function (){
    angular.module('Humanity')
        .factory("ScholarshipFactory", scholarshipApi);

    var scholarshipEndPoint = globalConfig.apiEndpoint + "/scholarship/:id";

    function scholarshipApi (r) {
        return r(scholarshipEndPoint, {id:'@id', sort:'precedence'}, { update: {method:'PUT' }});
    }
    scholarshipApi.$inject = ['$resource'];
})();
