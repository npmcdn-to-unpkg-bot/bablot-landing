var loginPage = Vue.extend({
  template: `
    <div class="login-page">
      <h5>You must login or sign up to see this page.</h5>
      <button v-on:click="showLogin" class="fb-login-button">
        Login with Facebook
      </button>
    </div>
  `,
  methods: {
    showLogin: function() {
      let fbProvider = new firebase.auth.FacebookAuthProvider();

      firebase.auth().signInWithPopup(fbProvider).then((result)=> {
        let token = result.credential.accessToken;
        let user = result.user;
        this.$dispatch('login-success', user);
      }).catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        let email = error.email;
        let credential = error.credential;
    });
    }
  }
});

Vue.component('login-page', loginPage);
