(function (){
    angular.module('Humanity')
        .directive('modalSeveranceCertificate', modalSeveranceCertificate);

    function modalSeveranceCertificate () {
        return {
            restrict : 'E',
            scope : {
                userId : '@',
                userName : '@'
            },
            templateUrl: "html/users/directives/modal-severance-certificate.html",
            controller : modalController,
            controllerAs: "modalCtrl",
            bindToController: true
        };
    }

    function modalController (GenerateSeveranceFactory){
        var vm = this;
        vm.download = {};

        vm.requestDownload = function () {
            console.log(vm);
            GenerateSeveranceFactory.save({}, {
                userId: vm.userId,
                subject : vm.subject,
                amount : vm.amount
            }, vm.getSuccess, vm.getError);
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
