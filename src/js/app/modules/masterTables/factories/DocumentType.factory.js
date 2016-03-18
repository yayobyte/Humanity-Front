/**
 * Consumes the Document Type table
 */
'use strict';
(function (){
    angular.module('Humanity')
        .factory('DocumentTypeFactory',nationalityApi);

    var nationalityApiEndpoint = globalConfig.apiEndpoint + "/documenttype/:id" ;

    function nationalityApi ($resource) {
        return $resource(nationalityApiEndpoint, {id:'@id'}, { update: {method:'PUT' }});
    }

})();
