var builder = new Vue({
  el: '#builder',
  template: `
    <div v-if="!currentUser">
      <login-page v-on:login-success="loginSuccess"></login-page>
    </div>
    <div v-else>
      <h5> Questions | Answers </h5>
      <h5> {{ faqs.length }} / 15 </h5>
      <div v-for="faq in faqs">
        <builder-row
          :row-id="1"
          :faq="faq"
          v-on:delete-row="removeRow" >
        </builder-row>
      </div>
      <button
        class="save-changes-button"
        v-on:click="addRow"
        v-show="faqs.length < 15" >
          add
      </button>
      <button class="save-changes-button" v-on:click="saveChanges"> Build </button>
      <div v-show="devMode">
        <button class="save-changes-button" v-on:click="download"> Download </button>
      </div>
    </div>
  `,
  data: {
    devMode: false,
    faqs: [],
    currentUser: firebase.auth().currentUser
  },
  methods: {
    loginSuccess: function(user) {
      this.currentUser = user;
      return firebase.database().ref(`users/${user.displayName}@${user.uid}`).once('value')
        .then((showcase)=> {
          if (showcase.val()) {
            let faqs = showcase.val();
            for (var key in faqs) {
              console.log(faqs[key]);
              this.faqs.push(faqs[key]);
            }
          }
        });
    },
    addRow: function () {
      if (this.faqs.length < 15) {
        this.faqs.push({
          question: 'what is a dog like?',
          type: 'text',
          answer: { text: 'MOstly wet..' }
        });
        setTimeout(()=> {
          window.scrollTo(0, document.body.scrollHeight + 500);
        }, 0);
      }
    },
    removeRow: function(faq) {
      this.faqs.$remove(faq);
    },
    download: function() {
      let facebookFormatData = {};

      this.$children.forEach( (builderRow) => {
        let serial = builderRow.serialize();
        let key = builderRow.faq.question.toLowerCase().replace (/ /g, '_')
        facebookFormatData[key] = serial;
      });

      var data = "text/json;charset=utf-8," +
          encodeURIComponent(JSON.stringify(facebookFormatData, null, '  '));
      window.open(`data:${data}`);

    },
    saveChanges: function() {
      let faqsToSave = [];
      this.$children.forEach( (builderRow) => {
        faqsToSave.push({
          type: builderRow.templateType,
          question: builderRow.faq.question,
          answer: builderRow.serialize()
        });
      });
      firebase.database().ref(`users/${this.currentUser.displayName}@${this.currentUser.uid}`).set(faqsToSave);
    }
  }
});
