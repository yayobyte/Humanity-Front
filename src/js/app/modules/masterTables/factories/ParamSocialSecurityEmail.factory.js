(function (){
    'use strict';
    angular.module('Humanity')
        .factory('ParamSocialSecurityEmailFactory', ParamSocialSecurityEmailFactory);

    var sailsEndpoint = "http://localhost:1337";
    var paramSocialSecurityEmailEndpoint = sailsEndpoint + "/paramsocialsecurityemail/:id" ;

    function ParamSocialSecurityEmailFactory ($resource){
        return $resource(paramSocialSecurityEmailEndpoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();
