/**
 * Consumes the Rh master table
 */

(function (){
    angular.module('Humanity')
        .factory('RhFactory',rhApi);

    var rhEndPoint = globalConfig.apiEndpoint + '/rh/:id';

    function rhApi ($resource){
        return $resource (rhEndPoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();
