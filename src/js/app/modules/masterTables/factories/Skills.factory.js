/**
 * Consumes the Skills table
 */
(function (){
    angular.module('Humanity')
        .factory("SkillsFactory", skillsApi);

    var skillsEndPoint = globalConfig.apiEndpoint + '/skills/:id';

    function skillsApi (r){
        return r(skillsEndPoint, {id:'@id', sort:'name'}, { update: {method:'PUT' }});
    }
    skillsApi.$inject = ['$resource'];
})();
