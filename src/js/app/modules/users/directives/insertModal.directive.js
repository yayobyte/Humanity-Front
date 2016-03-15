'use strict';
(function (){
    angular.module('usersModule')
        .directive("insertModal",insertModal);

    function insertModal (){
        var directive = {
            restrict: 'E',
            scope: {
                modalName:'@',
                recordId : '@',
                recordName : '@'
            },
            templateUrl : "html/users/directives/modal-directive.html",
            controller : modalController,
            controllerAs: "modalCtrl",
            bindToController: true
        };

        return directive;
    }

    function modalController (AfpFactory, EpsFactory, ProjectFactory, SeniorityFactory, SkillsFactory,ParamSocialSecurityEmailFactory) {
        var vm = this;
        vm.postStatus = {};
        vm.submitted = false;
        vm.updating = false;
        vm.tablePrefix = "";
        if (vm.recordId!='' || vm.recordId!= undefined){
            vm.name = vm.recordName;
            vm.updating = true;
        }

        vm.validateFormData = function (prefix){
            vm.tablePrefix = prefix;
            if (vm.recordId){
                vm.postStatus.data = { "name": vm.name, "id" : vm.recordId };
            }else{
                vm.postStatus.data = { "name": vm.name };
            }
            switch (prefix) {
                case 'Afp' :
                    AfpFactory.save(vm.postStatus.data, vm.postSuccess, vm.postError);
                    break;
                case 'Eps':
                    EpsFactory.save(vm.postStatus.data, vm.postSuccess, vm.postError);
                    break;
                case 'Project' :
                    ProjectFactory.save(vm.postStatus.data, vm.postSuccess, vm.postError);
                    break;
                case 'Seniority' :
                    SeniorityFactory.save(vm.postStatus.data, vm.postSuccess, vm.postError);
                    break;
                case 'Skills' :
                    SkillsFactory.save(vm.postStatus.data, vm.postSuccess, vm.postError);
                    break;
                case 'SocialSecurityEmails' :
                    ParamSocialSecurityEmailFactory.save(vm.postStatus.data, vm.postSuccess, vm.postError);
                    break;
                default :
                    vm.postError({status: 503 , data: {summary:"Error finding provider"}});
            }
            return true;
        };

        vm.resetInfo = function (){
            vm.name = "";

        };

        vm.reLoadModal = function (){
            window.location.reload(false);
        };

        vm.postSuccess = function (response){
            vm.postStatus  =  response;
            vm.postStatus.message = vm.tablePrefix + " successfully created/created";
            vm.postStatus.error = false;
            vm.resetInfo();
            vm.postStatus.submitted = true;
        };

        vm.postError = function (error){
            vm.postStatus = error;
            vm.postStatus.message = "Error " + error.status + " " + error.statusText + " | Message: " + error.data.summary;
            vm.postStatus.error = true;
        };
    }
})();
