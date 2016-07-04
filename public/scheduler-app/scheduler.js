var builder = new Vue({
  el: '#scheduler',
  template: `
    <div v-if="!currentUser">
      <login-page v-on:login-success="loginSuccess"></login-page>
    </div>
    <div v-else>
      I am the scheduler
    </div>
  `,
  data: {
    devMode: true,
    faqs: [],
    currentUser: firebase.auth().currentUser
  },
  methods: {
    loginSuccess: function(user) {
      this.currentUser = user;
      console.log(user);
    }
  }
});
