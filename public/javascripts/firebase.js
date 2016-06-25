var config = {
  apiKey: "AIzaSyBc37nzoXPRZIG8JiJeHW99d21oZLKUIGg",
  authDomain: "bablot-faq.firebaseapp.com",
  databaseURL: "https://bablot-faq.firebaseio.com",
  storageBucket: "bablot-faq.appspot.com"
};

firebase.initializeApp(config);

function showLogin() {
  var provider = new firebase.auth.FacebookAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;

    document.querySelector('.login-page').style.display = 'none';
    getFaqs();

  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
});

}
