app.service('topicsService', function($rootScope,$firebaseArray){
    const TOPICS = "topics";
    var topics = [];
    var topicsStrings = [];

    this.getTopicsFromServer = function(){
        var ref = firebase.database().ref().child(TOPICS);
        topics = $firebaseArray(ref);

        topics.$loaded().then(function(){
            topics.forEach(function(item){
                topicsStrings.push(item.$value);
            });
        });
    };

    this.add = function(topic) {
        topics.$add(topic).then(function (e) {

            alert('Topic Added!');

        }).catch(function(error) {
            console.log('Error!');
        });

        topicsStrings.push(topic);
    }

    this.getTopicsOriginal = function(){

        return topics;
    }
    this.getTopics = function(){

        return topicsStrings;
    }

});