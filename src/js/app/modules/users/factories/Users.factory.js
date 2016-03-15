(function (){
    angular.module('Humanity')
        .factory('UsersFactory', usersFactory );

    var sailsEndpoint = "http://localhost:1337";
    var usersEndpoint = sailsEndpoint + "/user/:id" ;

    function usersFactory ($resource){
         return $resource(usersEndpoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();
