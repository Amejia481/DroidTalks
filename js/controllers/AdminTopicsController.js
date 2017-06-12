// Initialize Firebase
var config = {
    apiKey: "AIzaSyB7WBZX1JZ33uEMcROpeWZlCbXTFzEZbbc",
    authDomain: "shareme-13ef5.firebaseapp.com",
    databaseURL: "https://shareme-13ef5.firebaseio.com",
    projectId: "shareme-13ef5",
    storageBucket: "shareme-13ef5.appspot.com",
    messagingSenderId: "391326964143"
};
firebase.initializeApp(config);

var app = angular.module('myApp', ["firebase","isteven-multi-select"]);

app.run(function(topicsService,creatorsService,talksService){
    topicsService.getTopicsFromServer();
    creatorsService.getCreatorsFromServer();
    talksService.getTalksFromServer();
});

app.controller('adminTopicsCtrl', function($scope,topicsService,$firebaseArray) {

    $scope.addNewTopic = function (){
        topicsService.add(angular.copy($scope.newTopicName));
    }

});