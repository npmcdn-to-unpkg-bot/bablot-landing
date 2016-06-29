var builder = new Vue({
  el: '#builder',
  template: `
    <div v-if="currentUser">
      <login-page v-on:login-success="loginSuccess"></login-page>
    </div>
    <div>
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
    devMode: true,
    // faqs: [],
    faqs: window.dummyData,
    currentUser: firebase.auth().currentUser
  },
  methods: {
    loginSuccess: function(user) {
      // this.currentUser = user;
      // return firebase.database().ref(`users/${user.displayName}@${user.uid}`).once('value')
      //   .then((showcase)=> {
      //     if (showcase.val()) {
      //       let faqs = showcase.val();
      //       for (var key in faqs) {
      //         this.faqs.push(faqs[key]);
      //       }
      //     }
      //   });
    },
    addRow: function () {
      let rand = Math.floor(Math.random() * 36);
      if (this.faqs.length < 15) {
        this.faqs.push({
          question: window.sillyQuestions[rand],
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
        console.log(JSON.stringify(serial));
        let key = builderRow.faq.question.toLowerCase().replace (/ /g, '_');
        console.log(key);
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
