var builder = new Vue({
  el: '#builder',
  template: `
    <h5> Questions | Answers </h5>
    <div v-for="faq in faqs">
      <builder-row :row-id="1" :faq="faq" ></builder-row>
    </div>
    <button class="save-changes-button" v-on:click="addRow"> add </button>
    <button class="save-changes-button" v-on:click="saveChanges"> Build </button>
  `,
  data: {
    faqs: window.dummyData
  },
  methods: {
    addRow: function () {
      this.faqs.push({
        index: 1,
        question: 'what is a dog like?',
        type: 'text',
        answer: {
          text: 'MOstly wet..'
        }
      })
    },
    saveChanges: function() {
      this.$children.forEach( (builderRow) => {
        console.log(builderRow.serialize());
      })
    }
  }
});

console.log(window.dummyData);
