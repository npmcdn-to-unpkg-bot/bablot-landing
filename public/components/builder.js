var builder = new Vue({
  el: '#builder',
  template: `
    <h5> Questions | Answers </h5>
    <h5> {{ faqs.length }} / 15 </h5>
    <div v-for="faq in faqs">
      <builder-row :row-id="1" :faq="faq" ></builder-row>
    </div>
    <button
      class="save-changes-button"
      v-on:click="addRow"
      v-show="faqs.length < 15">
        add
    </button>
    <button class="save-changes-button" v-on:click="saveChanges"> Build </button>
    <button class="save-changes-button" v-on:click="download"> Download </button>
  `,
  data: {
    faqs: window.dummyData
  },
  methods: {
    addRow: function () {
      if (this.faqs.length < 15) {
        this.faqs.push({
          index: 1,
          question: 'what is a dog like?',
          type: 'text',
          answer: {
            text: 'MOstly wet..'
          }
        });
        setTimeout(()=> {
          window.scrollTo(0, document.body.scrollHeight + 500);
        }, 0);
      }
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
      let facebookFormatData = {};
      this.$children.forEach( (builderRow) => {
        let key = builderRow.faq.question.toLowerCase().replace (/ /g, '_')
        facebookFormatData[key] = builderRow.faq.answer;
      });
    }
  }
});
