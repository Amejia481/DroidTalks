
app.controller('adminCreatorsCtrl', function($scope,creatorsService) {

    $scope.newCreator = {"name":"", "twitter":""};

    $scope.addNewCreator = function (){
        creatorsService.add(angular.copy($scope.newCreator))
    }

});