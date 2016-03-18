/**
 * Consumes the Project Table
 */

(function (){
    angular.module('Humanity')
        .factory("ProjectFactory", projectApi)

    var projectEndPoint = globalConfig.apiEndpoint + '/project/:id';

    function projectApi ($resource){
        return $resource (projectEndPoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();
