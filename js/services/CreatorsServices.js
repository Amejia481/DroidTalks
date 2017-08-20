app.service('creatorsService', function ($rootScope, $firebaseArray) {
    const CREATORS = "creators";
    const CREATORS_TALKS = "creatorsTalks";
    var creators = [];
    var creatorsTalks = [];

    this.getCreatorsFromServer = function () {
        var ref = firebase.database().ref().child(CREATORS);
        creators = $firebaseArray(ref);
        creatorsTalks = $firebaseArray(firebase.database().ref().child(CREATORS_TALKS));
    };

    this.add = function (creator) {
        creators.$add(creator).then(function (data) {
            var newItem = creators.$getRecord(data.key);
            creator.id = data.key;
            newItem.id = data.key;
            creators.$save(newItem).catch(function (error) {
                console.log('Error!');
            });

            firebase.database().ref(CREATORS_TALKS + "/" + data.key).set(
                {
                    id: newItem.id,
                    name: creator.name,
                    resourcesCout: 0,
                    twitter: creator.twitter
                }
            ).catch(function (error) {
                alert('Error creatorsTalks NOT ADDED!' + error);
            });

            alert("Creator Added")
        }).catch(function (error) {
            console.log('Error!');
        });

    }

    this.getCreators = function () {
        return creators;
    }
    this.addNewTalkToCreatorsTalks = function (item) {

        var data = creatorsTalks.$getRecord(item.id)
        data.resourcesCout += 1

        creatorsTalks.$save(data).catch(function (error) {
            console.log('Error!');
        });

    }

    this.findCreatorByName = function (name) {

        return creators.filter(function (item) {
            return ( item.name.trim().replace(/\s+/g, '') === name.trim().replace(/\s+/g, ''))
        });

    }
})
;