/**
 * @description: Consumes API for creating a downloadable pdf
 */
(function (){
    angular.module('Humanity')
        .factory('GenerateCertificationFactory' , generateCertification);
    var generationEndPoint = globalConfig.apiEndpoint + globalConfig.apiRoutes.generateCertification;


    function generateCertification ($resource){
        return $resource(generationEndPoint, { id:'@id'}, { update: {method:'PUT' }});
    }
})();
