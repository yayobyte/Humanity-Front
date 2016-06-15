/**
 * Consumes the Marital Status Master Table
 */
(function(){
    angular.module('Humanity')
        .factory('MaritalStatusFactory', maritalStatusApi);


    var maritalStatusEndPoint = globalConfig.apiEndpoint + "/maritalstatus/:id";

    function maritalStatusApi (r) {
        return r(maritalStatusEndPoint, {id:'@id', sort:'name'}, { update: {method:'PUT' }});
    }
    maritalStatusApi.$inject = ['$resource'];
})();
