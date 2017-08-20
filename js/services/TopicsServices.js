app.service('topicsService', function ($rootScope, $firebaseArray) {
    const TOPICS = "topics";
    const TOPICS_TALKS = "topicsTalks";
    var topics = [];
    var topicsStrings = [];
    var topicsTalks = [];

    this.getTopicsFromServer = function () {
        var ref = firebase.database().ref().child(TOPICS);
        topics = $firebaseArray(ref);
        topicsTalks = $firebaseArray(firebase.database().ref().child(TOPICS_TALKS));

        topics.$loaded().then(function () {
            topics.forEach(function (item) {
                topicsStrings.push(item.$value);
            });
        });
    };

    this.addNewTalkToTopicsTalks = function (key) {

        var data = topicsTalks.$getRecord(key)
        data.resourcesCount += 1

        topicsTalks.$save(data).catch(function (error) {
            console.log('Error!');
        });

    }

    this.add = function (topic) {
        topics.$add(topic).then(function (snapshot) {


            firebase.database().ref(TOPICS_TALKS + "/" + snapshot.key).set(
                {
                    id: snapshot.key,
                    name: topic,
                    resourcesCount: 0
                }
            ).catch(function (error) {
                alert('Error topicsTalks NOT ADDED!' + error);
            });
            alert('Topic Added!');

        }).catch(function (error) {
            alert('Error topics NOT ADDED!' + error);
        });

        topicsStrings.push(topic);
    }

    this.getTopicsOriginal = function () {

        return topics;
    }
    this.getTopics = function () {

        return topicsStrings;
    }

});