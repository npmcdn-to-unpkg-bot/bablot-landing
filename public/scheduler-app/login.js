var loginPage = Vue.extend({
  template: `
    <div class="login-page">
      <h5>You must login or sign up to see this page.</h5>
      <button v-on:click="showLogin" class="bablot-google-login-button">
        Login with Google
      </button>
    </div>
  `,
  methods: {
    showLogin: function() {
      let googleProvider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(googleProvider).then((result)=> {
        let token = result.credential.accessToken;
        let user = result.user;
        this.$dispatch('login-success', user);
      }).catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        let email = error.email;
        let credential = error.credential;
        console.log(error);
    });
    }
  }
});

Vue.component('login-page', loginPage);
