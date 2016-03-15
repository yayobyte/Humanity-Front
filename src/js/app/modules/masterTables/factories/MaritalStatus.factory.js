/**
 * Consumes the Marital Status Master Table
 */
(function(){
    angular.module('Humanity')
        .factory('MaritalStatusFactory', maritalStatusApi);


    var sailsEndpoint = "http://localhost:1337";
    var maritalStatusEndPoint = sailsEndpoint + "/maritalstatus/:id";

    function maritalStatusApi ($resource){
        return $resource (maritalStatusEndPoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();
