'use strict';
(function(){
    angular.module('Humanity')
        .controller('ListUsersController',listUsersController)
        .factory("UserList", usersApi);

    var moduleName = "Users";

    function usersApi ($resource) {
        return $resource(globalConfig.apiEndpoint + '/user');
    }

    function listUsersController (UserList, UsersFactory){
        var vm = this;
        vm.postStatus = {};
        vm.postObject = {};
        vm.moduleName = moduleName;
        vm.tableFields = {
            "id" : "#",
            "documentNumber" : "ID",
            "hiredTime" : "Hired",
            "name" : "Name",
            "lastName" : "Last Name",
            "status" : "Status",
            "salary" : "Salary",
            "seniority" : "Position",
            "projectName" : "Project Name"
        };

        UserList.query(function(data){
            vm.tableData = data;
        });

        vm.changeUserStatus = function (userId, userStatus) {
            vm.postObject.id = userId;
            vm.postObject.status = (userStatus == 1 ? 0 : 1);
            UsersFactory.save(vm.postObject, function (response){
                vm.postStatus  =  response;
                vm.postStatus.message = "User successfully created";
                vm.postStatus.error = false;
                UserList.query(function(data){
                    vm.tableData = data;
                });
            },function (error){
                vm.postStatus = error;
                vm.postStatus.message = "Error " + error.status + " " + error.statusText + " | Message: " + error.data.summary;
                vm.postStatus.error = true;
                vm.postStatus.postedForm = true;
            });
        };
    }
})();
