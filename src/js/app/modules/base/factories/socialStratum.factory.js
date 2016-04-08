/**
 * Create a static factory to return social stratum data
 */

(function (){
    angular.module('Humanity')
        .factory("SocialStratumFactory", socialStratumApi);

    function socialStratumApi() {
        var factory = {};

        factory.data = function() {
            return {
                "1": { "id" : 1, "name" : "1" },
                "2": { "id" : 2, "name" : "2" },
                "3": { "id" : 3, "name" : "3" },
                "4": { "id" : 4, "name" : "4" },
                "5": { "id" : 5, "name" : "5" },
                "6": { "id" : 6, "name" : "6" }
            };
        };

        return factory;
    }
})();
