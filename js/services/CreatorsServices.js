app.service('creatorsService', function($rootScope,$firebaseArray){
    const CREATORS = "creators";
    var creators = [];

    this.getCreatorsFromServer = function(){
        var ref = firebase.database().ref().child(CREATORS);
        creators = $firebaseArray(ref);
    };

    this.add = function(creator) {
        creators.$add(creator).then(function(data){
            var newItem  = creators.$getRecord(data.key);
            creator.id = data.key;
            newItem.id = data.key;
            creators.$save(newItem).catch(function(error) {
                console.log('Error!');
            });
            alert("Creator Added")
        }).catch(function(error) {
            console.log('Error!');
        });

    }

    this.getCreators = function(){
        return creators;
    }

    this.findCreatorByName = function(name){

        return creators.filter(function(item){
            return ( item.name.trim().replace(/\s+/g, '') === name.trim().replace(/\s+/g, ''))
        });

    }
});