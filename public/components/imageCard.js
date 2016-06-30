(function() {

  let defaultValue = { attachment: { payload: { url: 'assets/king3.svg' } } };

  var imageCard = Vue.extend({
  props: {
    'content': {
      type: Object,
      default: defaultValue
    }
  },
  template: `
      <div class="bablot-messenger-image">
        <div class="wrapper">
          <img
            width="250px"
            v-bind:src="content.attachment.payload.url"/>
        </div>
        <div class="url-bar">
          <p>URL:</p>
          <input v-model="content.attachment.payload.url"/>
        </div>
      </div>
    `
  });

  Vue.component('image-card', imageCard);
})();
