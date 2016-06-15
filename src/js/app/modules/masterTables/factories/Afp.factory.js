/**
 * Consumes the AFP Table
 */

(function (){
    angular.module('Humanity')
        .factory("AfpFactory", afpApi);

    var afpEndpoint = globalConfig.apiEndpoint + "/afp/:id" ;

    function afpApi (r) {
        return r(afpEndpoint, {id:'@id', sort:'name'}, { 
            update: {
                method:'PUT' 
            }, 
            get: {
                method:'GET', 
                headers: { 
                    'Access-Control-Allow-Origin' : '*' 
                } 
            } 
        });
    }
    afpApi.$inject = ['$resource'];    
})();
