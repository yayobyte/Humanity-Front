(function (){
    'use strict';
    angular.module('Humanity')
        .factory('ParamSocialSecurityEmailFactory', ParamSocialSecurityEmailFactory);

    var paramSocialSecurityEmailEndpoint = globalConfig.apiEndpoint + "/paramsocialsecurityemail/:id" ;

    function ParamSocialSecurityEmailFactory ($resource){
        return $resource(paramSocialSecurityEmailEndpoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();
