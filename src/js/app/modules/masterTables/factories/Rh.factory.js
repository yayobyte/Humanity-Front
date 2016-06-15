/**
 * Consumes the Rh master table
 */

(function (){
    angular.module('Humanity')
        .factory('RhFactory',rhApi);

    var rhEndPoint = globalConfig.apiEndpoint + '/rh/:id';

    function rhApi (r) {
        return r(rhEndPoint, {id:'@id', sort:'name'}, { update: {method:'PUT' }});
    }
    rhApi.$inject = ['$resource'];
})();
