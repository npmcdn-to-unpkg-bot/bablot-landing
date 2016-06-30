(function() {

  var defaultValue = { text: `Humbly bumbly, where's my jam?!` };

  var textCard = Vue.extend({
    props: {
      'content': {
        type: Object,
        default: defaultValue
      }
    },
    template: `
      <div
        contenteditable="true"
        @keyup='updateText'
        @keydown='updateText'
        v-model="content.text"
        class="bablot-messenger-text">
      </div>
    `,
    compiled: function() {
      this.$el.innerText = this.content.text;
    },
    methods: {
      updateText: function(e) {
        let textToSet = e.target.innerText;
        this.$set('content.text', textToSet);
      }
    }
  });

  Vue.component('text-card', textCard);
})()
