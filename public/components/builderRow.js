var BuilderRow = Vue.extend({
  props: ['faq'],
  template: `
  <div class="builder-row">
      <div class="builder-row-col-left">
        <textarea
          class="questionInput"
          v-model="faq.question"
          cols="20"
          rows="3">
        </textarea>

        <card-select
          v-on:selection-changed="changeTemplate"
          :default="faq.type" >
        </card-select>
        <button v-on:click="delete" class="delete-button">delete</button>
      </div>
      <div class="builder-row-col-right">
        <div class="card">

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

          <button-card
            v-ref:button
            v-if="templateType == 'button'"
            :content.sync="responses.button" >
          </button-card>

        </div>
      </div>

  </div>`,
  data: function() {
    return { responses: {} }
  },
  created: function() {
    this.$set(`responses.${this.faq.type}`, this.faq.answer);
  },
  methods: {
    changeTemplate: function(state) {
      this.$set('templateType', state.currentValue);
    },
    delete: function() {
      this.$dispatch('delete-row', this.faq);
    },
    serialize: function() {
      let responses = this.responses[this.templateType];
      return responses;
    }
  }
});

Vue.component('builder-row', BuilderRow)
