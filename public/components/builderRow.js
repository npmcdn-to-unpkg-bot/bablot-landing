var BuilderRow = Vue.extend({
  props: ['rowId', 'faq'],
  template: `
  <div id="builder_row_{{rowId}}" class="builder-row">

      <div class="builder-row-col-left">
        {{rowId}}
        <button v-on:click="delete" class="delete-button">delete</button>
        <input class="questionInput" v-model="faq.question" />
      </div>

      <div class="builder-row-col-middle">
        <card-select
          v-on:selection-changed="changeTemplate"
          :default="faq.type" >
        </card-select>
      </div>

      <div class="builder-row-col-right">
        <div id="card_{{rowId}}" class="card">
          <text-card
            v-show="templateType == 'text'"
            :content="faq.answer" >
          </text-card>
          <image-card v-show="templateType == 'image'"></image-card>
        </div>
      </div>

  </div>`,
  methods: {
    changeTemplate: function(state) {
      this.$set('templateType', state.currentValue);
    },
    delete: function() {},
    serialize: function() {
      return {
        lemmons: 'one'
      }
    }
  }
});

Vue.component('builder-row', BuilderRow)
