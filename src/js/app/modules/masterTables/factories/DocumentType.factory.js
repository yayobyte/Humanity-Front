/**
 * Consumes the Document Type table
 */
'use strict';

(function (){
    angular.module('Humanity')
        .factory('DocumentTypeFactory',documentTypeApi);

    var nationalityApiEndpoint = globalConfig.apiEndpoint + "/documenttype/:id" ;

    function documentTypeApi (r) {
        return r(nationalityApiEndpoint, {id:'@id', sort:'name'}, { update: {method:'PUT' }});
    }
    documentTypeApi.$inject = ['$resource'];
})();
