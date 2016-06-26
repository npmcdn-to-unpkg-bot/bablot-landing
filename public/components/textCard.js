var textCard = Vue.extend({
  props: ['rowId', 'content'],
  template: `
    <div contenteditable="true" class="bablot-messenger-text">
      {{ content.text }}
    </div>`
});

Vue.component('text-card', textCard);
