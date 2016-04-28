(function (){
    angular.module('Humanity')
        .directive('uploadAvatar', uploadAvatar);

    function uploadAvatar() {
        return {
            restrict : 'E',
            scope : {},
            templateUrl : 'html/users/directives/upload-avatar.html',
            controller : uploadAvatarController,
            controllerAs: "avatarController",
            bindToController: true
        };

    }

    function uploadAvatarController($scope) {
        $scope.uploader = {};
        $scope.upload = function () {
            $scope.uploader.flow.upload();
        }
    }
})();
