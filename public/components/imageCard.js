var imageCard = Vue.extend({
  props: ['rowId'],
  template: `
    <div class="bablot-messenger-image">
      <div class="wrapper"><img id="previewImage_{{rowId}}" width="250px" src="http://puu.sh/pFPLm/f5b591e509.png"/></div>
      <div class="url-bar">
        <p>URL:</p>
        <input id="imageUrl_{{rowId}}" value="http://puu.sh/pFPLm/f5b591e509.png"/>
        <button onclick="updateImage({{rowId}})">update</button>
      </div>
    </div>`
});

Vue.component('image-card', imageCard);
