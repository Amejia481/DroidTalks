
app.controller('adminTalksCtrl', function($scope,talksService,topicsService, creatorsService) {




    $scope.speakers = creatorsService.getCreators();
    $scope.topics = topicsService.getTopicsOriginal();
    $scope.types = [{"name":"VIDEO"},{"name":"AUDIO"}];
    $scope.beautify = function(){
        return JSON.stringify($scope.newTalk, null, 2);
    };


    $scope.newTalk = {"name":"","slides":"","speakers":[],"topic":"","type":"","video":""};
    $scope.addNewTalk = function (){
        talksService.add(angular.copy($scope.newTalk))
    }

});