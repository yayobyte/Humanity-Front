'use strict';
(function(){
    angular.module('Humanity')
        .controller('AdminUsersController',adminUsersController);

    var moduleName = "User";

    function adminUsersController (
        BirthPlaceFactory, NationalityFactory, DocumentTypeFactory, MaritalStatusFactory, RhFactory, ScholarshipFactory,
        AfpFactory, EpsFactory, ProjectFactory, SeniorityFactory, SkillsFactory, ParamSocialSecurityEmailFactory
    )
    {
        var vm = this;

        vm.moduleName = moduleName;
        vm.modal = {};

        //Config Tables
        AfpFactory.query(function(data){
            vm.afpTableData = data;
        });
        EpsFactory.query(function(data){
            vm.epsTableData = data;
        });
        ProjectFactory.query(function(data){
            vm.projectTableData = data;
        });
        SeniorityFactory.query(function(data){
            vm.seniorityTableData = data;
        });
        SkillsFactory.query(function(data){
            vm.skillsTableData = data;
        });
        ParamSocialSecurityEmailFactory.query(function (data){
            vm.socialSecutiryEmailTableData = data;
        });

        //Master Tables
        BirthPlaceFactory.query(function(data){
            vm.birthPlaceTableData = data;
        });
        NationalityFactory.query(function (data){
            vm.nationalityTableData = data;
        });
        DocumentTypeFactory.query(function (data) {
            vm.documentTypeTableData = data;
        });
        MaritalStatusFactory.query(function (data) {
            vm.maritalStatusTableData = data;
        });
        RhFactory.query(function (data) {
            vm.rhTableData = data;
        });
        ScholarshipFactory.query(function (data) {
            vm.scholarshipTableData = data;
        });

        vm.arrayToString = function(string){
            return string.join(", ");
        };

        vm.setupModal = function (modalName,id,name) {
            vm.modal.ModalHeader = modalName;
            vm.modal.id = id;
            vm.modal.name = name;
        };

        vm.createNewConfigRecord = function (tableName){

        };

    }
})();
