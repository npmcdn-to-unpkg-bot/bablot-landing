var imageCard = Vue.extend({
  props: ['rowId', 'content'],
  template: `
    <div class="bablot-messenger-image">
      <div class="wrapper"><img id="previewImage_{{rowId}}" width="250px" v-bind:src="content.attachment.payload.url"/></div>
      <div class="url-bar">
        <p>URL:</p>
        <input id="imageUrl_{{rowId}}" v-model="content.attachment.payload.url"/>
      </div>
    </div>
  `
});

Vue.component('image-card', imageCard);
