
var app = angular.module('myApp', []);
app.controller('mainCtrl', function($scope) {
    $scope.talks = talks;
    $scope.topics = topics;

    $scope.replaceSpaceByDash = function(text){
       return text.replace(/\s+/g, '-');
    }

    $scope.getSpeakerText = function(speakers){
        var testFormatted = "";
        if(speakers){

        }
        return speakers
    }
});
