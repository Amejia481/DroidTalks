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
function writeUserData(url) {
    var today = new Date().toLocaleString();
    var newPostRef = firebase.database().ref('pendingResources/').push();
    newPostRef.set({
        url: url,
        date: today
    });
}
function showAlert(){
    function isURL(value) {
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
    }
    swal({
            title: "Submit a new Resource!",
            type: "input",
            showCancelButton: true,
            closeOnConfirm: false,
            inputPlaceholder: "Write something"
        },
        function(inputValue){
            if (!isURL(inputValue)) {
                swal.showInputError("Invalid Url!");
                return false
            }

            writeUserData(inputValue)

            swal("Thanks!", "You submitted: " + inputValue, "success");
        });
}