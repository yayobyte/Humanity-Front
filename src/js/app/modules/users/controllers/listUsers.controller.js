'use strict';
(function(){
    angular.module('Humanity')
        .controller('ListUsersController',listUsersController)
        .factory("UserList", usersApi);

    var moduleName = "Users";

    function usersApi ($resource) {
        return $resource(globalConfig.apiEndpoint + '/user');
    }

    function listUsersController (UserList, UsersFactory, GenerateCertificationFactory, DownloadCertificationFactory){
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

            if(userStatus == 1) {
                // Ask for confirmation before deactivating a user
                // If confirmation is cancelled exit the deactivation procedure
                if (!confirm("Are you sure you want to deactivate this user?")) {
                    return;
                }
            }

            // If activating a user or the procedure passed confirmation, save the data
            UsersFactory.save(vm.postObject, function (response){
                vm.postStatus  =  response;
                vm.postStatus.message = "User successfully created";
                vm.postStatus.error = false;
                UserList.query(function(data){
                    vm.tableData = data;
                });
            }, function (error){
                vm.postStatus = error;
                vm.postStatus.message = "Error " + error.status + " " + error.statusText + " | Message: " + error.data.summary;
                vm.postStatus.error = true;
                vm.postStatus.postedForm = true;
            });
        };

        vm.getCertification = function (userIdentification, typeOfCertification){
            console.log(userIdentification, typeOfCertification);
            userIdentification = (userIdentification != undefined) ? userIdentification : '0';
            var certificateAction = (typeOfCertification == 'labor') ? globalConfig.apiRoutes.generateLaborAction : globalConfig.apiRoutes.generateSeveranceAction;
            GenerateCertificationFactory.query({action : certificateAction, id: userIdentification}, vm.getSuccess, vm.getError);
        };

        vm.getSuccess = function (response){
            vm.postStatus  =  response[0];
            var fileId = vm.postStatus.tempFileId;
            console.log('file: ' +  fileId);
            DownloadCertificationFactory.query({file : fileId}, vm.downloadSuccess, vm.getError);
        };
        vm.downloadSuccess = function (response){
            console.log('Que cuca');
        };

        vm.getError = function (error){
            console.log(error);
            vm.postStatus = error;
            vm.postStatus.message = "Error " + error.status + " " + error.statusText + " | Message: " + error.data.summary;
            vm.postStatus.error = true;
        };

    }
})();
