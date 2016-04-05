(function (){
    angular.module('Humanity')
        .factory('UsersFactory', usersFactory );

    var usersEndpoint = globalConfig.apiEndpoint + "/user/:id" ;

    function usersFactory ($resource){
         return $resource(usersEndpoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();
