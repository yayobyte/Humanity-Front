/**
 * Consumes the Skills table
 */
(function (){
    angular.module('Humanity')
        .factory("SkillsFactory", skillsApi);

    var skillsEndPoint = globalConfig.apiEndpoint + '/skills/:id';

    function skillsApi ($resource){
        return $resource (skillsEndPoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();
