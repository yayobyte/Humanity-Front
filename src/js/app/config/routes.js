(function (){
    angular.module('Humanity')
        .config(function ($routeProvider){
            $routeProvider
                .when('/', {
                    templateUrl: 'html/generic/index.html'
                })
                .when('/users/admin', {
                    templateUrl : 'html/users/admin.html'
                })
                .when('/users/create',{
                    templateUrl: 'html/users/create.html'
                })
                .when('/users/list',{
                    templateUrl: 'html/users/list.html'
                })
                .otherwise({
                    templateUrl : 'html/generic/error.html'
                });
        });
})();
