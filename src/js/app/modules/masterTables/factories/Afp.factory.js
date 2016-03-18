/**
 * Consumes the AFP Table
 */

(function (){
    angular.module('Humanity')
        .factory("AfpFactory", afpApi);

    var afpEndpoint = globalConfig.apiEndpoint + "/afp/:id" ;

    function afpApi ($resource) {
        return $resource(afpEndpoint, {id:'@id'}, {
            update: {
                method:'PUT'
            },
            get : {
                method: 'GET',
                headers : {
                    'Access-Control-Allow-Origin' : '*'
                }
            }
        });
    }
})();
