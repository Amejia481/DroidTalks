
var app = angular.module('myApp', []);

app.filter('inArray', function($filter){
    return function(list, speaker, element){
        if(speaker){
            return $filter("filter")(list, function(talk){
                 return talk.speakers.indexOf(speaker) != -1

            });
        }
    };
});
app.directive("talkSection", function() {

    return {
        scope:{
            talk:'='
        },
        link: function(scope, element, attrs) {
            scope.getIconBySourceType = function (sourceType){
                var icon = "";
                switch(sourceType){
                    case SOURCE_TYPE_AUDIO:
                        icon = "audiotrack";
                        break;

                    case SOURCE_TYPE_VIDEO:
                        icon = "movie_creation";
                        break;

                    default:
                        icon = "movie_creation";
                }
                return icon;
            }
        },
        template :
            '<li  class="mdl-card__title mdl-card--border"  style="list-style-type: none; border-bottom-style:none; ">'+
                '<span>' +
                    '<h5><i class="material-icons">{{ getIconBySourceType(talk.type) }}</i><span>  <a target="_blank" href="{{talk.video}}">{{talk.name}}</a> </h5>'+
                    '<strong ng-show="talk.speakers.length">Authors:</strong> <span ng-repeat=" speaker in talk.speakers | orderBy ">  <a target="{{speaker.twitter ? \'_blank\' : \'_self\'}}" href="{{ speaker.twitter || \'#\' }}" >{{speaker.name}}</a> </span>'+
                    '<br/>'+
                    '<span ng-show="talk.slides"><strong>Resources:</strong>  <a target="_blank" href="{{talk.slides}}" >Slides</a></span>'+
                '</span>'+
            '</li>'
    };


});

app.controller('mainCtrl', function($scope,$http) {
    $scope.talks = talks;
    $scope.topics = topics;
    $scope.events = events;
    $scope.speakers = speakers;
    $scope.SOURCE_TYPE_VIDEO = SOURCE_TYPE_VIDEO;
    $scope.SOURCE_TYPE_AUDIO = SOURCE_TYPE_AUDIO;
    $scope.replaceSpaceByDash = function(text){
       return text.replace(/\s+/g, '-');
    }

    $http.get("https://api.github.com/repos/Amejia481/DroidTalks/contributors")
        .then(function(contributorsData) {
            $scope.contributors = [];

            contributorsData.data.forEach(function(contributor){

                $http.get("https://api.github.com/users/"+contributor.login)
                    .then(function(userProfileData) {
                        $scope.contributors.push({
                            login:contributor.login,
                            avatar_url:contributor.avatar_url,
                            contributions:contributor.contributions,
                            name:userProfileData.data.name

                        })
                    });

            });
        });

    $scope.getSpeakerText = function(speakers){
        var testFormatted = "";
        if(speakers){

        }
        return speakers
    }


});
