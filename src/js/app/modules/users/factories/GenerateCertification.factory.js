/**
 * @description: Consumes API for creating a downloadable pdf
 */
(function (){
    angular.module('Humanity')
        .factory('GenerateCertificationFactory' , generateCertification);
    var generationEndPoint = globalConfig.apiEndpoint + globalConfig.apiRoutes.generateLaborCertification;


    function generateCertification ($resource){
        return $resource(generationEndPoint, { action: '@action', id:'@id'}, { update: {method:'PUT' }});
    }
})();
