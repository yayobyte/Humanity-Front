'use strict';
(function(){
    angular.module('Humanity')
        .controller('EditUsersController', editUsersController);

    var moduleName = "Users";

    function editUsersController($scope, $routeParams, SocialStratumFactory, DocumentTypeFactory, BirthPlaceFactory, NationalityFactory, MaritalStatusFactory,
                                   ScholarshipFactory, RhFactory, SeniorityFactory, ProjectFactory, AfpFactory,
                                   EpsFactory, SkillsFactory, UsersFactory) {
        var vm = this;
        vm.postStatus = {};
        vm.postObject = {};
        vm.moduleName = moduleName;

        vm.socialStratumApi = SocialStratumFactory.data();

        UsersFactory.get({id: $routeParams.id}, function(data){
            vm.userInfo = data;
            // Convert date strings to Date type objects
            vm.userInfo.birthday = new Date(vm.userInfo.birthday);
            vm.userInfo.hiredTime = new Date(vm.userInfo.hiredTime);

            vm.pageName = data.name + ' ' + data.firstLastName;
        });

        DocumentTypeFactory.query(function (data){
            vm.documentTypeApi = data;
        });
        BirthPlaceFactory.query(function (data){
            vm.birthPlaceApi = data;
        });
        NationalityFactory.query(function (data){
            vm.nationalityApi = data;
        });
        MaritalStatusFactory.query(function (data){
            vm.maritalStatusApi = data;
        });
        ScholarshipFactory.query(function (data){
            vm.scholarshipApi = data;
        });
        RhFactory.query(function (data){
            vm.rhApi = data;
        });
        SeniorityFactory.query(function (data){
            vm.seniorityApi = data;
        });
        ProjectFactory.query(function (data){
            vm.projectApi = data;
        });
        AfpFactory.query(function (data){
            vm.afpApi = data;
        });
        EpsFactory.query(function (data){
            vm.epsApi = data;
        });
        SkillsFactory.query(function (data){
            vm.skillsApi = data;
        });

        vm.validateFormData = function (){
            // TODO: Convert this to a reusable component
            // instead of a controller method

            var userForm = $scope.editUsersForm;

            for (var key in userForm) {
                var elem = userForm[key];

                if (typeof(elem) == 'object' && elem.hasOwnProperty('$dirty') && elem.$dirty === true) {
                    var modelValue = null;
                    console.log(elem);

                    if (elem.$name == 'socialStratum') {
                        modelValue = elem.$modelValue.id;
                    }
                    else {
                        modelValue = elem.$modelValue;
                    }

                    vm.postObject[elem.$name] = modelValue;
                }
            }

            console.log(vm.postObject);

            UsersFactory.update(vm.postObject, {id: $routeParams.id}, function (response){
                vm.postStatus = response;
                vm.postStatus.message = "User successfully created";
                vm.postStatus.error = false;
            },function (error){
                vm.postStatus = error;
                vm.postStatus.message = "Error " + error.status + " " + error.statusText + " | Message: " + error.data.summary;
                vm.postStatus.error = true;
                vm.postStatus.postedForm = true;
            });
            return true;
        };
    }
})();
