'use strict';
(function(){
    angular.module('Humanity')
        .controller('CreateUsersController', CreateUsersController)

    var moduleName = "Users";

    var statusApi = [
        { "id" : 0, "name" : "Inactive" },
        { "id" : 1, "name" : "Active" }
    ];

    var socialStratumApi = [
        { "id" : 1, "name" : "1" },
        { "id" : 2, "name" : "2" },
        { "id" : 3, "name" : "3" },
        { "id" : 4, "name" : "4" },
        { "id" : 5, "name" : "5" },
        { "id" : 6, "name" : "6" }
    ];


    function CreateUsersController(DocumentTypeFactory, BirthPlaceFactory, NationalityFactory, MaritalStatusFactory,
                                   ScholarshipFactory, RhFactory, SeniorityFactory, ProjectFactory, AfpFactory,
                                   EpsFactory, SkillsFactory, UsersFactory){
        var vm = this;
        vm.moduleName = moduleName;
        vm.pageName = "create";

        //Select lists
        vm.documentTypeApi = "";
        vm.birthPlaceApi = "";
        vm.nationalityApi = "";
        vm.maritalStatusApi = "";
        vm.scholarshipApi = "";
        vm.rhApi = "";

        vm.seniorityApi = "";
        vm.projectApi = "";
        vm.afpApi = "";
        vm.epsApi = "";
        vm.skillsApi = "";

        vm.postObject = {};
        vm.postStatus = {};
        vm.postStatus.error = false;
        vm.postStatus.message = false;
        vm.postStatus.postedForm = false;
        vm.personalInfo = {};
        vm.contactInfo = {};
        vm.corporateInfo = {};
        vm.securityInfo = {};

        //Personal Info
        vm.personalInfo.status = true;

        //Hard-coded selects
        vm.socialStratumApi = socialStratumApi;
        vm.statusApi = statusApi;


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

            vm.postObject.skill = [];
            for (var property in vm.corporateInfo.skills){
                if(vm.corporateInfo.skills[property] == true){
                    vm.postObject.skill.push(property);
                }
            }
        };

        vm.validateFormData = function (){
            console.log('Creating new user');

            angular.extend(vm.postObject, vm.personalInfo);
            vm.postObject.documentType = vm.personalInfo.documentType.id ;
            vm.postObject.birthPlace = vm.personalInfo.birthPlace.id;
            vm.postObject.nationality =  vm.personalInfo.nationality.id;
            vm.postObject.maritalStatus = vm.personalInfo.maritalStatus.id;
            vm.postObject.scholarship = vm.personalInfo.scholarship.id;
            vm.postObject.socialStratum = vm.personalInfo.socialStratum.id;
            vm.postObject.rh = vm.personalInfo.rh.id;

            angular.extend(vm.postObject,vm.contactInfo);

            angular.extend(vm.postObject,vm.corporateInfo);
            vm.postObject.seniority = vm.corporateInfo.seniority.id;
            vm.postObject.project = vm.corporateInfo.project.id;

            vm.postObject.afp = vm.securityInfo.afp.id;
            vm.postObject.eps = vm.securityInfo.eps.id;

            UsersFactory.save(vm.postObject, function (response){
                vm.postStatus  =  response;
                vm.postStatus.message = "User successfully created";
                vm.postStatus.error = false;
                vm.resetInfo();
            },function (error){
                vm.postStatus = error;
                vm.postStatus.message = "Error " + error.status + " " + error.statusText + " | Message: " + error.data.summary;
                vm.postStatus.error = true;
                vm.postStatus.postedForm = true;
            });
            return true;
        };

        vm.resetInfo = function (){
            vm.personalInfo = {};
            vm.contactInfo = {};
            vm.corporateInfo = {};
            vm.securityInfo = {};
        }
    }
})();
