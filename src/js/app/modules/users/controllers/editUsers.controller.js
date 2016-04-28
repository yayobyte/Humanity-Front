'use strict';
(function(){
    angular.module('Humanity')
        .controller('EditUsersController', editUsersController);

    var moduleName = "Users";

    var socialStratumApi = [
        { "id" : 1, "name" : "1" },
        { "id" : 2, "name" : "2" },
        { "id" : 3, "name" : "3" },
        { "id" : 4, "name" : "4" },
        { "id" : 5, "name" : "5" },
        { "id" : 6, "name" : "6" }
    ];


    function editUsersController($scope, $routeParams, SocialStratumFactory, DocumentTypeFactory, BirthPlaceFactory, NationalityFactory, MaritalStatusFactory,
                                   ScholarshipFactory, RhFactory, SeniorityFactory, ProjectFactory, AfpFactory,
                                   EpsFactory, SkillsFactory, UsersFactory) {
        var vm = this;
        vm.postStatus = {};
        vm.postObject = {};
        vm.moduleName = moduleName;

        UsersFactory.get({id: $routeParams.id}, function(data){
            vm.userInfo = data;
            // Convert date strings to Date type objects
            vm.userInfo.birthday = new Date(vm.userInfo.birthday);
            vm.userInfo.hiredTime = new Date(vm.userInfo.hiredTime);

            vm.pageName = data.name + ' ' + data.firstLastName;

            vm.userInfo.skills = [];
            for (var c=0; c < vm.userInfo.skill.length ; c++) {
                vm.userInfo.skills [vm.userInfo.skill[c]] = vm.userInfo.skill[c] ? true : false ;
            }
            vm.userInfo.socialStratum = {'id' : data.socialStratum , 'name' : data.socialStratum};

        });

        vm.socialStratumApi = socialStratumApi;

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

        vm.extractSkills = function (){
            //TODO: Convert this in a reusable component
            vm.postObject.skill = [];
            for (var property in vm.userInfo.skills){
                if(vm.userInfo.skills[property] == true){
                    vm.postObject.skill.push(property);
                }
            }
        };

        vm.validateFormData = function (){
            // TODO: Convert this to a reusable component
            // instead of a controller method

            var userForm = $scope.editUsersForm;
            vm.postObject.skill = [];
            for (var key in userForm) {
                var elem = userForm[key];

                // Look for changed fields
                if (typeof(elem) == 'object' && elem.hasOwnProperty('$dirty') && elem.$dirty === true) {
                    var modelValue = null;
                    // Validation fo Skills model
                    var skillModel = elem.$name.substring(0,6);
                    if (skillModel == 'skills'){
                        vm.extractSkills();
                    }else {
                        // On these fields save just the id and not the whole object
                        switch (elem.$name) {
                            case 'socialStratum':
                                modelValue = elem.$modelValue.id;
                                break;
                            case 'documentType':
                                modelValue = elem.$modelValue.id;
                                break;
                            case 'birthPlace':
                                modelValue = elem.$modelValue.id;
                                break;
                            case 'nationality':
                                modelValue = elem.$modelValue.id;
                                break;
                            case 'maritalStatus':
                                modelValue = elem.$modelValue.id;
                                break;
                            case 'scholarship':
                                modelValue = elem.$modelValue.id;
                                break;
                            case 'rh':
                                modelValue = elem.$modelValue.id;
                                break;
                            case 'seniority':
                                modelValue = elem.$modelValue.id;
                                break;
                            case 'project':
                                modelValue = elem.$modelValue.id;
                                break;
                            case 'afp':
                                modelValue = elem.$modelValue.id;
                                break;
                            case 'eps':
                                modelValue = elem.$modelValue.id;
                                break;
                            default:
                                modelValue = elem.$modelValue;
                        }
                        vm.postObject[elem.$name] = modelValue;
                    }

                }
            }
            if (vm.postObject.skill.length == 0) {vm.postObject.skill = null;}

            UsersFactory.update(vm.postObject, {id: $routeParams.id}, function (response){
                vm.postStatus = response;
                vm.postStatus.message = "User successfully updated";
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
