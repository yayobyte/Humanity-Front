'use strict';
(function(){
    angular.module('usersModule',[]);
    angular.module('masterTables',[
        'ngResource'
    ]);

    angular.module('Humanity',[
        'usersModule',
        'masterTables',
        'ngResource',
        'ngRoute'
       // 'ui.bootstrap'
    ]);
})();
