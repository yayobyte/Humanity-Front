/**
 * Consumes the Project Table
 */

(function (){
    angular.module('Humanity')
        .factory("ProjectFactory", projectApi)

    var projectEndPoint = globalConfig.apiEndpoint + '/project/:id';

    function projectApi (r) {
        return r(projectEndPoint, {id:'@id', sort:'name'}, { update: {method:'PUT' }});
    }
    projectApi.$inject = ['$resource'];
})();
