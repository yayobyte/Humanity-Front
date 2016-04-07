(function (){
    angular.module('Humanity')
        .factory('GenerateSeveranceFactory', generateSeverance);

    var generationEndPoint = globalConfig.apiEndpoint + globalConfig.apiRoutes.generateSeveranceAction;

    function generateSeverance ($resource){
        return $resource(generationEndPoint, { id:'@id'}, { update: {method:'PUT' }});
    }
})();
