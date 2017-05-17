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

    swal({
            title: "Submit a new Resource!",
            type: "input",
            showCancelButton: true,
            closeOnConfirm: false,
            inputPlaceholder: "Write something"
        },
        function(inputValue){
            if (!(inputValue)) {
                swal.showInputError("You need to write something!");
                return false
            }

            writeUserData(inputValue)

            swal("Thanks!", "You submitted: " + inputValue, "success");
        });
}