var textCard = Vue.extend({
  props: ['rowId', 'content'],
  template: `
    <div
      contenteditable="true"
      @keyup='proofRead'
      @keydown='proofRead'
      v-model="content.text"
      class="bablot-messenger-text">
    </div>
  `,
  compiled: function() {
    this.$el.innerText = this.content.text;
  },
  methods: {
    proofRead: function(e) {
      let textToSet = e.target.innerText;
      this.$set('content.text', textToSet);
    }
  }
});




Vue.component('text-card', textCard);
