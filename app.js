
var app = angular.module('myApp', ['LocalStorageModule']);

app.filter('inArray', function($filter){
    return function(list, speaker, element){
        if(speaker){
            return $filter("filter")(list, function(talk){
                 return talk.speakers.indexOf(speaker) != -1

            });
        }
    };
});
app.directive("talkSection", function(WatchedTalksService) {

    return {
        scope:{
            talk:'='
        },
        link: function(scope, element, attrs) {
            const ICON_NOT_WATCHED_TALK = 'sentiment_very_dissatisfied';
            const ICON_WATCHED_TALK = 'done_all';

            scope.addTalksToWatchedList = function(id){
                if(scope.isTalksToWatched(id)) {
                    WatchedTalksService.removeFromWatchedList(id)
                }else{
                    WatchedTalksService.addTalksToWatchedList(id)
                }
            }
            scope.isTalksToWatched = function(id){
                return WatchedTalksService.isTalksToWatched(id);
            }
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

            scope.getIconWatched = function (id){
                var isWatched = scope.isTalksToWatched(id);
                return  (isWatched) ? ICON_WATCHED_TALK : ICON_NOT_WATCHED_TALK;
            }
            scope.getTextColorWatched = function (id){
                var isWatched = scope.isTalksToWatched(id);
                return  (isWatched) ? 'color: rgb(63,81,181);' : '';
            }
        },
        template :
            '<li   class="mdl-card__title mdl-card--border"  style="list-style-type: none; border-bottom-style:none; " >' +
                '<span>' +
                    '<h5 style="margin-bottom: 5px !important;"><i class="material-icons mdl-button.mdl-button--colored">{{ getIconBySourceType(talk.type) }}</i><span>' +
                        '  <a style="{{ getTextColorWatched(talk.id) }}' +
                            ' target="_blank" href="{{talk.video}}">{{talk.name}}</a> ' +
                        '<button title="{{ (isTalksToWatched(talk.id) ) ? \'watched :)\' : \'Not watched yet\' }}" class="mdl-button mdl-js-button mdl-button--icon ' +
                            '{{ (isTalksToWatched(talk.id) ) ? \'mdl-button--colored\' : \'\' }}" '+
                             'ng-click="addTalksToWatchedList(talk.id)">'+
                            '<i class="material-icons">{{getIconWatched(talk.id)}}</i>'+
                        '</button>'+
                    '</h5>'+
                    '<strong ng-show="talk.speakers.length">Authors:</strong> ' +
                        ' <span ng-repeat=" speaker in talk.speakers | orderBy "> ' +
                        ' <a style="{{getTextColorWatched(talk.id)}}" target="{{speaker.twitter ? \'_blank\' : \'_self\'}}" href="{{ speaker.twitter || \'#\' }}" >{{speaker.name}}</a> </span>'+
                    '<br/>'+
                    '<span ng-show="talk.slides"><strong>Resources:</strong> ' +
                        ' <a style="{{getTextColorWatched(talk.id)}}" target="_blank" href="{{talk.slides}}" >Slides</a></span>'+
                '</span>'+
            '</li>'
    };


});

app.directive("paginationSection", function() {
    return {
        scope:{
             unfilteredData:'=',
             filteredData:'=',
            searchPattern:'=',
            currentPage:'=',
            pageSize:'='

        },
        link: function(scope, element, attrs) {
            scope.showNextButtonBeActivated = function(currentPage,pageSize ,fullData, filteredItems, query){
                var data = getDataDependingOnQuery(fullData, filteredItems, query);

                return currentPage >= (data.length/pageSize) - 1;
            }

            scope.getNumberOfPages= function(fullData, filteredItems, query){
                var data = getDataDependingOnQuery(fullData, filteredItems, query);
                var dataSize = (data.length == 0) ? 1 : data.length;

                return Math.ceil(dataSize/scope.pageSize);
            }


            function getDataDependingOnQuery(fullData, filteredItems, query){
                return  (query) ?  filteredItems : fullData;
            }
        },
        template :
        '<div class="mdl-grid" >'+
            '<div  class="mdl-cell mdl-cell--12-col mdl-cell--12-col-phone mdl-typography--text-center">' +
                '<button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored"'+
                    'ng-disabled="currentPage == 0" ng-click="currentPage=currentPage-1">'+
                        '<i class="material-icons">navigate_before</i>'+
                '</button>'+
                '<strong>  {{currentPage+1}} / {{getNumberOfPages(unfilteredData,filteredData,searchPattern)}}  </strong>'+
                '<button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored" ' +
                    'ng-disabled="showNextButtonBeActivated(currentPage,pageSize,unfilteredData,filteredData,searchPattern)" ' +
                    'ng-click="currentPage=currentPage+1">'+
                        '<i class="material-icons">navigate_next</i>'+
                '</button>'+
            '</div>'+
        '</div>'
    };


});
app.directive("showMore", function() {
    return {
        scope:{
            actualNumberOfItems:'=',
            totalItemsInCollection:'=',
            maxItemsToShow:'='


        },
        link: function(scope, element, attrs) {
            scope.showMore = function(){
                scope.actualNumberOfItems += scope.maxItemsToShow;
            }
        },
        template :
        '<div ng-show=" actualNumberOfItems < totalItemsInCollection "' +
            ' class="mdl-cell mdl-cell--12-col mdl-cell--12-col-phone mdl-typography--text-center">'+

            '<button  class="mdl-button mdl-button--colored"' +
                'ng-click="showMore()">'+
                    'Show More'+
            '</button>'+
        '</div>'
    };

});


app.controller('mainCtrl', function($scope,$http,WatchedTalksService) {

    $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.MAX_ITEMS_TO_SHOW_PER_CARDS = 3;

    const emptyArray = [];
    $scope.talks = talks;
    $scope.topics = topics;
    $scope.events = events;
    $scope.speakers = speakers;
    $scope.SOURCE_TYPE_VIDEO = SOURCE_TYPE_VIDEO;
    $scope.SOURCE_TYPE_AUDIO = SOURCE_TYPE_AUDIO;

    $scope.filteredTopicData = emptyArray;
    $scope.filteredEventData = emptyArray;
    $scope.filteredCreatorsData = emptyArray;


    $scope.getCountOfWatchedTalk = function(talks){
        var count = 0;
        talks.forEach( function(item){
            if(WatchedTalksService.isTalksToWatched(item.id))
                count++;
        });
        return count;
    }
    $scope.$watch("topics | filter:searchPattern", function(newVal) {
        $scope.filteredTopicData = (newVal)? newVal : emptyArray;
    }, true);

    $scope.$watch("events | filter:{name:searchPattern}", function(newVal) {
        $scope.filteredEventData = (newVal)? newVal : emptyArray;
    }, true);

    $scope.$watch("speakers | filter:{name:searchPattern}", function(newVal) {
        $scope.filteredCreatorsData = (newVal)? newVal : emptyArray;
    }, true);

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


});

app.service('WatchedTalksService', function(localStorageService) {

    var talksWatchedList = (localStorageService.get('talksWatchedList'))
        ?  localStorageService.get('talksWatchedList') : [];

    this.getWatchedList = function(){
        return talksWatchedList;
    }
    this.addTalksToWatchedList = function(id){
        talksWatchedList.push(id);
        localStorageService.set('talksWatchedList',talksWatchedList);

    }
    this.removeFromWatchedList = function(id){
         talksWatchedList.splice(talksWatchedList.indexOf(id),1) ;
        localStorageService.set('talksWatchedList',talksWatchedList);
    }
    this.isTalksToWatched = function(id){
        return  talksWatchedList.indexOf(id) != -1;
    }
});


app.filter('startFrom', function() {
    return function(items, start) {
        start = +start; //parse to int
        return items.slice(start);
    }
});
