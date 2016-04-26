'use strict';
(function(){
    angular.module('Humanity')
        .controller('ListUsersController', ['UserList', 'UsersFactory', 'GenerateCertificationFactory', 'GenerateSeveranceFactory','$confirm',listUsersController])
        .factory("UserList", usersApi);

    var moduleName = "Users";

    function usersApi ($resource) {
        return $resource(globalConfig.apiEndpoint + '/user');
    }

    function listUsersController (UserList, UsersFactory, GenerateCertificationFactory, GenerateSeveranceFactory, $confirm){
        var vm = this;
        vm.postStatus = {};
        vm.postObject = {};
        vm.download = {};
        vm.modal = {};
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
            var done = false; 
            if(userStatus == 1) {
              
                $confirm({text: 'Are you sure you want to deactivate this user?'})
                    .then(function() {
                      vm.savePostObject();
                });
            }else{
                vm.savePostObject();
            }
        };

        vm.savePostObject = function (){
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
        }

        vm.getCertification = function (userIdentification, typeOfCertification, userName){
            if (userIdentification) {
                switch (typeOfCertification) {
                    case 'labor' :
                        GenerateCertificationFactory.save({
                            userId: userIdentification
                        }, vm.getSuccess, vm.getError);
                        break;
                    case 'severance' :
                        vm.modal.userId = userIdentification;
                        vm.modal.userName = userName;
                        break;
                    default :
                        console.warn('Wrong certification requested');
                        break;
                }
            }else{
                console.warn('userIdentification not sent');
            }
        };

        vm.getSuccess = function (response){
            var fileId = response.tempFileId;
            vm.download.message = "Certification created successfully" ;
            console.log(vm.download.message);
            vm.download.error = false;
            window.open(globalConfig.apiEndpoint + globalConfig.apiRoutes.downloadCertification.replace(':file' , fileId));
        };

        vm.getError = function (error){
            vm.download = error;
            vm.download.message = "Error: " + error.data;
            console.log(vm.download.message);
            vm.download.error = true;
        };

    }
})();
