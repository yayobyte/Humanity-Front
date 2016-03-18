/**
 * Consumes the Marital Status Master Table
 */
(function(){
    angular.module('Humanity')
        .factory('MaritalStatusFactory', maritalStatusApi);


    var maritalStatusEndPoint = globalConfig.apiEndpoint + "/maritalstatus/:id";

    function maritalStatusApi ($resource){
        return $resource (maritalStatusEndPoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();
