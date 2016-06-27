var BuilderRow = Vue.extend({
  props: ['rowId', 'faq'],
  template: `
  <div id="builder_row_{{rowId}}" class="builder-row">
      <div class="builder-row-col-left">
        <input class="questionInput" v-model="faq.question" />
        <card-select
          v-on:selection-changed="changeTemplate"
          :default="faq.type" >
        </card-select>
        <button v-on:click="delete" class="delete-button">delete</button>
      </div>
      <div class="builder-row-col-right">
        <div id="card_{{rowId}}" class="card">

          <text-card
            v-ref:text
            v-show="templateType == 'text'"
            :content.sync="responses.text" >
          </text-card>

          <image-card
            v-ref:image
            v-show="templateType == 'image'"
            :content.sync="responses.image" >
          </image-card>

        </div>
      </div>

  </div>`,
  data: function() {
    return {
      responses: {
        text: { text: `Humbly bumbly, where's my jam?!` },
        image: { attachment: { payload: { url: 'assets/king3.svg' } } }
      }
    }
  },
  created: function() {
    this.$set(`responses.${this.faq.type}`, this.faq.answer);
  },
  methods: {
    changeTemplate: function(state) {
      this.$set('templateType', state.currentValue);
    },
    delete: function() {},
    serialize: function() {
      let responses = this.responses[this.templateType];
      return responses;
    }
  }
});

Vue.component('builder-row', BuilderRow)
