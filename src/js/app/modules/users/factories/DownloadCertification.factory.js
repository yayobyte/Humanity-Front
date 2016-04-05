/**
 * @description: Consumes API for creating a downloadable pdf
 */
(function (){
    angular.module('Humanity')
        .factory('DownloadCertificationFactory' ,downloadCertification);
    var downloadEndPoint = globalConfig.apiEndpoint + globalConfig.apiRoutes.downloadCertification;

    function downloadCertification ($resource){
        console.log(downloadEndPoint);
        return $resource(downloadEndPoint, { file: '@file'}, {
            update: {
                method:'PUT'
            },
            get : {
                method: 'GET',
                headers: {
                    accept: 'application/pdf' //or whatever you need
                },
                responseType: 'arraybuffer',
                cache: false,

            }
        });
    }
})();
